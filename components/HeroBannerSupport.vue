<template>
  <div class="hero-banner">
    <div class="video-overlay"></div>
    <video autoplay muted loop class="hero-video">
      <source src="public/video1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <h1 class="neon-text">Welcome to Our Support Center</h1>
      <p class="neon-text">Providing assistance and resources for women in need.</p>
      <button class="scroll-down-btn" @click="scrollToNextSection">Scroll Down</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToNextSection() {
      const nextSection = document.querySelector('.first-section'); // Change '.first-section' to the selector of the next section
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 80vh; /* Adjust the height of the banner */
  overflow: hidden;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity of the overlay */
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

h1,
p {
  color: #fff;
  margin-bottom: 1rem;
}

.neon-text {
  color: #fff;
  text-shadow: 
    0 0 5px #9400D3,
    0 0 10px #9400D3,
    0 0 15px #9400D3,
    0 0 20px #9400D3,
    0 0 25px #9400D3,
    0 0 30px #9400D3,
    0 0 35px #9400D3;
  font-size: 3rem; /* Adjust the font size as needed */
}

p.neon-text {
  font-size: 1.5rem; /* Adjust the font size as needed */
}

.scroll-down-btn {
  background-color: #6a0dad; /* Change the button color as needed */
  color: #fff;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.scroll-down-btn:hover {
  background-color: #4b077e; /* Change the button color on hover */
}
</style>
