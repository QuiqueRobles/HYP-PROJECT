<template>
  <div>
    <div class="chatbot-tab" @click="toggleChatbot">
      <span>{{ isOpen ? '>' : '< Open our Chatbot!' }}</span>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpen" class="chatbot">
        <div class="chat-header">
          <button class="close-button" @click="toggleChatbot" aria-label="Close chatbot">✖</button>
          <span>We are here to support women</span>
        </div>
        <div class="chat-container" ref="chatContainer">
          <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.isUser, 'bot-message': !message.isUser }">
            {{ message.text }}
          </div>
          <div v-if="isLoading" class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i> 
          </div>
        </div>
        <div class="input-container">
          <input v-model="inputText" @keyup.enter="sendMessage" type="text" placeholder="Type your message..." aria-label="Type your message">
          <button @click="sendMessage" :disabled="isLoading" aria-label="Send message">
            <span v-if="!isLoading">Send</span>
            <span v-else><i class="fas fa-spinner fa-spin"></i></span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const openaiApiKey = config.public.openaiApiKey

export default {
  
  data() {
    return {
      isOpen: false,
      inputText: '',
      messages: [],
      isLoading: false // For loading state
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

      this.isLoading = true;

      try {
        // Send the user's message to the OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
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
      } catch (error) {
        console.error('Error:', error);
        this.messages.push({ text: 'Sorry, something went wrong. Please try again later.', isUser: false });
      } finally {
        this.isLoading = false;

        // Scroll to the bottom of the chat container
        this.$nextTick(() => {
          const chatContainer = this.$refs.chatContainer;
          chatContainer.scrollTop = chatContainer.scrollHeight;
        });
      }
    }
  }
};
</script>

<style scoped>
.chatbot-tab {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #8e25ae;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1000;
  transition: background-color 0.3s;
}
.chatbot-tab:hover {
  background-color: #7a1c99;
}

.chatbot {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 350px;
  height: 500px;
  background-color: white;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.chat-header {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: #8e25ae;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  background-color: #f9f9f9;
}

.input-container {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
  background-color: #8e25ae;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
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
  background-color: #e0e0e0;
  color: black;
}

.bot-message {
  align-self: flex-start;
  background-color: #d1c4e9;
  color: black;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .chatbot {
    width: 100%;
    height: 60%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
}
</style>
