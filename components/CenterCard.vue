<template>
  <div class="center-card">
    <div class="center-card-content">
      <h3>{{ center.title }}</h3>
      <p><strong>Address:</strong> {{ center.address }}</p>
      <p><strong>Phone:</strong> {{ center.phone }}</p>
      <p><strong>Email:</strong> <a :href="'mailto:' + center.email">{{ center.email }}</a></p>
      <ul>
        <li v-for="(service, index) in center.services" :key="index">{{ service }}</li>
      </ul>
    </div>
    <div class="center-card-footer">
      <button @click="showModal(center)">More Info</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    center: Object
  },
  methods: {
    showModal(center) {
      // Aquí puedes implementar la lógica para mostrar un modal con más información
      alert(`More info about ${center.title}`);
    }
  }
}
</script>

<style scoped>
.center-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  position: relative;
  padding: 20px;
}

.center-card-content {
  padding-bottom: 20px;
}

.center-card h3 {
  font-size: 24px;
  color: #4a148c;
  margin-bottom: 15px;
}

.center-card p {
  font-size: 16px;
  color: #555;
}

.center-card a {
  color: #4a148c;
  text-decoration: none;
}

.center-card a:hover {
  text-decoration: underline;
}

.center-card-footer {
  text-align: center;
}

.center-card-footer button {
  padding: 10px 20px;
  background-color: #4a148c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.center-card-footer button:hover {
  background-color: #7b1fa2;
}
</style>
