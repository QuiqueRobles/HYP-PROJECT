<template>
  <div>
    <div class="chatbot-tab" @click="toggleChatbot">
      <span>{{ isOpen ? '>' : '<' }}</span>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpen" class="chatbot">
        <div style="background-color: #8e25ae;"class="chat-header">
          <button class="close-button" @click="toggleChatbot">X</button>
          We are here to support women 
        </div>
        <div class="chat-container" ref="chatContainer">
          <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.isUser, 'bot-message': !message.isUser }">
            {{ message.text }}
          </div>
        </div>
        <div class="input-container">
          <input v-model="inputText" @keyup.enter="sendMessage" type="text" placeholder="Type your message...">
          <button style="background-color: #8e25ae;"@click="sendMessage">Send</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Chatbot',
  data() {
    return {
      messages: [],
      inputText: '',
      isOpen: false // Estado para controlar si el chatbot está abierto o cerrado
    };
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen;
    },
    async sendMessage() {
      if (!this.inputText.trim()) return;

      this.messages.push({
        text: this.inputText,
        isUser: true
      });

      await this.getBotResponse(this.inputText.trim());

      this.inputText = '';

      // Scroll al final del chat después de enviar un mensaje
      this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
    },
    async getBotResponse(inputText) {
      try {
        const response = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer PUT_KEY_HERE' // Reemplaza con tu clave de API de OpenAI
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            prompt: inputText,
            max_tokens: 150
          })
        });
        const data = await response.json();
        if (data && data.choices && data.choices.length > 0) {
          this.messages.push({
            text: data.choices[0].text.trim(),
            isUser: false
          });
        } else {
          console.error('No response from OpenAI API');
        }
      } catch (error) {
        console.error('Error fetching response:', error);
      }
    }
  }
};
</script>

<style scoped>
.chatbot {
  position: fixed;
  bottom: 30px;
  right: 0;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  background-color: #ddb9db;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border-bottom: 1px solid #ccc;
}

.close-button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
  background-color: #693bb8;
}

.chat-container {
  padding: 10px;
  height: 200px;
  overflow-y: scroll;
}

.message {
  padding: 8px 12px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.user-message {
  background-color: #f0f0f0;
  text-align: right;
}

.bot-message {
  background-color: #8e25ae;
  color: #fff;
}

.input-container {
  display: flex;
  align-items: center;
  padding: 10px;
}

.input-container input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.input-container button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.input-container button:hover {
  background-color: #0056b3;
}

.chatbot-tab {
  position: fixed;
  bottom: 20px;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #451687;
  color: #fff;
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.chatbot-tab:hover {
  background-color: #0056b3;
}

/* Transition styles */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>


