<template>
  <div>
    <div class="chatbot-tab" @click="toggleChatbot">
      <span>{{ isOpen ? '>' : '<' }}</span>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpen" class="chatbot">
        <div class="chat-header">
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
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      inputText: '',
      messages: []
    };
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen;
    },
    async sendMessage() {
      if (this.inputText.trim() === '') return;

      // Add user's message to the chat
      this.messages.push({ text: this.inputText, isUser: true });
      const userMessage = this.inputText;
      this.inputText = '';

      // Scroll to the bottom of the chat container
      this.$nextTick(() => {
        const chatContainer = this.$refs.chatContainer;
        chatContainer.scrollTop = chatContainer.scrollHeight;
      });

      try {
        // Send the user's message to the OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer PUT_YOUR_KEY_HERE` // Reemplaza con tu clave API
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: 'user', content: userMessage }]
          })
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;

        // Add bot's response to the chat
        this.messages.push({ text: botMessage, isUser: false });

        // Scroll to the bottom of the chat container
        this.$nextTick(() => {
          const chatContainer = this.$refs.chatContainer;
          chatContainer.scrollTop = chatContainer.scrollHeight;
        });
      } catch (error) {
        console.error('Error:', error);
        this.messages.push({ text: 'Sorry, something went wrong. Please try again later.', isUser: false });
      }
    }
  }
};
</script>

<style scoped>
.chatbot-tab {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #8e25ae;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 1000; /* Ensure it's on top */
}

.chatbot {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 350px; /* Increased width */
  height: 500px; /* Increased height */
  background-color: white;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added shadow for better visibility */
  z-index: 1000; /* Ensure it's on top */
}

.chat-header {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: #8e25ae; /* Moved color to CSS */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.chat-container {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9; /* Light background for better contrast */
}

.input-container {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff; /* Ensure background is white */
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 10px 15px;
  background-color: #8e25ae; /* Button color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.message {
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  max-width: 80%;
  word-wrap: break-word;
}

.user-message {
  align-self: flex-end;
  background-color: #e0e0e0; /* Light gray background for user message */
  color: black;
}

.bot-message {
  align-self: flex-start;
  background-color: #d1c4e9; /* Light purple background for bot message */
  color: black;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>


