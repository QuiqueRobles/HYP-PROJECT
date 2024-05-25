<template>
  <div>
    <h1>Testimonials List</h1>
    <ul>
      <li v-for="testimonial in testimonials" :key="testimonial.id">
        <p><strong>Service ID:</strong> {{ testimonial.service_id }}</p>
        <p>{{ testimonial.testimonial }}</p>
      </li>
    </ul>
    <h2>Add a New Testimonial</h2>
    <form @submit.prevent="addNewTestimonial">
      <input v-model="newTestimonial.service_id" placeholder="Service ID" type="number" required />
      <textarea v-model="newTestimonial.testimonial" placeholder="Testimonial" required></textarea>
      <button type="submit">Add Testimonial</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTestimonialsStore } from '~/stores/testimonials';

const store = useTestimonialsStore();
const testimonials = store.testimonials;
const newTestimonial = ref({ service_id: 0, testimonial: '' });

function addNewTestimonial() {
  store.addTestimonial({ ...newTestimonial.value });
  newTestimonial.value = { service_id: 0, testimonial: '' };
}
</script>

<style scoped>
form {
  margin-top: 20px;
}
input, textarea {
  display: block;
  margin: 5px 0;
}
</style>
