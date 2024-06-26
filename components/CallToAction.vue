<template>
  <div class="call-to-action">
    <h2>Seek Support Now</h2>
    <p>If you or someone you know needs help, don't hesitate to reach out.</p>
    <router-link to="/contact" class="cta-button">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>

<style scoped>
.call-to-action {
  background-color: #e7daf3;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
}

.call-to-action h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.call-to-action p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.call-to-action button {
  background-color: #6a0dad;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.call-to-action button:hover {
  background-color: #550099;
}
.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #6a0dad;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 1.2rem;
}

.cta-button:hover {
  background-color: #550099;
}
</style>
