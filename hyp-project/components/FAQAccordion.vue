<template>
  <div class="faq-accordion">
    <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
      <button @click="toggleAccordion(index)" class="accordion-button">{{ faq.question }}</button>
      <div v-if="activeIndex === index" class="accordion-content">{{ faq.answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQAccordion',
  data() {
    return {
      activeIndex: null,
      faqs: [
        { question: "How can I get help?", answer: "You can contact our helpline or visit our center for support." },
        { question: "Is the support confidential?", answer: "Yes, we prioritize confidentiality and your safety." },
        { question: "What services do you offer?", answer: "We offer counseling, legal assistance, emergency shelter, and more." }
      ]
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
.accordion-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.accordion-button {
  width: 100%;
  padding: 1rem;
  background-color: #6a0dad;
  color: white;
  border: none;
  text-align: center; /* Centering titles */
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.4rem;
}

.accordion-button:hover {
  background-color: #550099;
}

.accordion-content {
  padding: 1rem;
  background-color: #fff;
  font-size: 1.3rem;
}
</style>

