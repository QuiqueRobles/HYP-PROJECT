<template>
  <div class="hero-banner">
    <div class="hero-content">
      <h1>Welcome to our Anti-Violence Centers</h1>
      <p>Providing support and assistance to victims of domestic violence</p>
      <button>Contact Us</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner'
}
</script>

<style scoped>
.hero-banner {
  background-image: url('publoc.jpg'); /* Cambia la ruta por la de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d71b8f;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.hero-content button {
  background-color: #ff5722;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.hero-content button:hover {
  background-color: #e64a19;
}
</style>
