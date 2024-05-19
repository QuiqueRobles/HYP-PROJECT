<template>
  <div class="center-card">
    <h2>{{ center.title }}</h2>
    <p><strong>Dirección:</strong> {{ center.address }}</p>
    <p><strong>Teléfono:</strong> {{ center.phone }}</p>
    <p><strong>Email:</strong> {{ center.email }}</p>
    <p><strong>Servicios:</strong></p>
    <ul>
      <li v-for="(service, index) in center.services" :key="index">{{ service }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.center-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.center-card h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

.center-card p {
  margin-bottom: 0.5rem;
}

.center-card ul {
  padding-left: 1rem;
}

.center-card li {
  margin-bottom: 0.25rem;
}
</style>
