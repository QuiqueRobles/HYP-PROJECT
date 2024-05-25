<template>
  <div class="testimonials">
    <h2>What Our Clients Say</h2>
    <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial">
      <p>{{ testimonial.text }}</p>
      <p class="author">- {{ testimonial.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        { text: "Thank you for your support. You've changed my life.", author: "Emily" },
        { text: "I felt safe and heard. Your team is amazing.", author: "Jessica" },
        { text: "I didn't know where to turn until I found you. Forever grateful.", author: "Sarah" }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials {
  margin-top: 4rem;
  text-align: center;
}

.testimonials h2 {
  color: #6a0dad;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.testimonial {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.testimonial p {
  font-size: 1.4rem;
}

.testimonial .author {
  font-style: italic;
  color: #999;
}
</style>
