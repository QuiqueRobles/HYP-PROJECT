<template>
  <section class="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-list">
      <FAQItem
        v-for="(faq, index) in faqs"
        :key="index"
        :faq="faq"
      />
    </div>
  </section>
</template>

<script>
import FAQItem from '@/components/FAQItem.vue'

export default {
  components: {
    FAQItem
  },
  data() {
    return {
      faqs: [
        {
          question: 'What should I do if I am experiencing violence?',
          answer: 'Contact our 24/7 helpline immediately and seek support from our centers.'
        },
        {
          question: 'How can I get legal advice?',
          answer: 'Visit our centers or contact us via phone or email to schedule a consultation.'
        },
        {
          question: 'Are your services confidential?',
          answer: 'Yes, all our services are completely confidential and your privacy is our utmost priority.'
        },
        {
          question: 'What types of support do you offer?',
          answer: 'We offer emotional and relational support, legal advice, job counseling, and orientation to social and health services.'
        },
        {
          question: 'How can I volunteer?',
          answer: 'You can volunteer by contacting us through our website or visiting one of our centers for more information.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq-section {
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.faq-section h2 {
  font-size: 32px;
  color: #4a148c;
  margin-bottom: 30px;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}
</style>
