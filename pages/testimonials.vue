<template>
  <div class="testimonials-list">
    <h1>Testimonials List</h1>
    <ul>
      <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <h2><strong>Service ID:</strong> {{ testimonial.service_id }}</h2>
        <p>{{ testimonial.testimonial }}</p>
      </li>
    </ul>
    <div class="add-testimonial">
      <h2>Add a New Testimonial</h2>
      <form @submit.prevent="addNewTestimonial" class="add-testimonial-form">
        <select v-model="newTestimonial.service_id" placeholder="Service" required class="input-service">
          <option value="" disabled selected>Choose a Service</option>
          <option v-for="service in services" :key="service.id" :value="service.id">{{ service.title }}</option>
        </select>
        <textarea v-model="newTestimonial.testimonial" placeholder="Testimonial" required></textarea>
        <button type="submit" class="submit-button">Add Testimonial</button>
       </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTestimonialsStore } from '~/stores/testimonials';
import { useServicesStore } from '~/stores/services';

const store = useTestimonialsStore();
const testimonials = store.testimonials;
const newTestimonial = ref({ service_id: 0, testimonial: '' });

const store_s = useServicesStore();
const services = store_s.services;

function addNewTestimonial() {
  store.addTestimonial({ ...newTestimonial.value });
  newTestimonial.value = { service_id: 0, testimonial: '' };
}
</script>



<style scoped>
.testimonials-list {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 8px;
}

.testimonial-details {
  margin-left: 20px;
}

.add-testimonial {
  margin-top: 40px;
}

.add-testimonial-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

.input-service {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
