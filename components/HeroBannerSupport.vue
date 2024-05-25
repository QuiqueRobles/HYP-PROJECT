<template>
  <div class="hero-banner">
    <div class="video-overlay"></div>
    <video autoplay muted loop class="hero-video">
      <source src="public/video1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <h1>Welcome to Our Support Center</h1>
      <p>Providing assistance and resources for women in need.</p>
      <button class="scroll-down-btn" @click="scrollToNextSection">Scroll Down</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToNextSection() {
      const nextSection = document.querySelector('.first-section'); // Cambia '.first-section' al selector de la siguiente sección
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 80vh; /* Modifica la altura del banner */
  overflow: hidden;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Ajusta el color y la opacidad del overlay */
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

h1 {
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.scroll-down-btn {
  background-color: #6a0dad; /* Cambia el color del botón según sea necesario */
  color: #fff;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.scroll-down-btn:hover {
  background-color: #4b077e; /* Cambia el color del botón al pasar el ratón sobre él */
}
</style>
