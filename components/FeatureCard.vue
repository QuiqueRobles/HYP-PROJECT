<template>
  <div class="feature-card">
    <i :class="['icon', feature.icon]"></i>
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.feature-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.feature-card .icon {
  font-size: 40px;
  color: #4a148c;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 24px;
  color: #4a148c;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 16px;
  color: #555;
}
</style>
