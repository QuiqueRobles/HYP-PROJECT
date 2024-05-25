<template>
  <div class="contact-section">
    <h2>{{ title }}</h2>
    <p>{{ address }}</p>
    <p>{{ phone }}</p>
    <p>{{ email }}</p>
    <p v-for="service in services" :key="service">{{ service }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    title: String,
    address: String,
    phone: String,
    email: String,
    services: Array
  }
}
</script>

<style scoped>
.contact-section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
