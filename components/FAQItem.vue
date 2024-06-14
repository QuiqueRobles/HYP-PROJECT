<template>
  <div class="faq-item" @click="toggle">
    <div class="faq-question">
      <h3>{{ faq.question }}</h3>
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </div>
    <p v-if="isOpen" class="faq-answer">{{ faq.answer }}</p>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.faq-item {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.faq-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 20px;
  color: #4a148c;
  margin: 0;
}

.faq-question .arrow {
  transition: transform 0.3s;
}

.faq-question .arrow.open {
  transform: rotate(180deg);
}

.faq-answer {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}
</style>
