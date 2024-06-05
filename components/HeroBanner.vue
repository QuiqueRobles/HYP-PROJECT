<template>
  <section class="hero-banner">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="@/public/video2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-content">
      <h1>Welcome to our Anti-Violence Centers</h1>
      <p>Providing support and assistance to victims of domestic violence</p>
      <button class="scroll-button" @click="scrollToCenters">Learn More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBanner',
  methods: {
    scrollToCenters() {
      const centersSection = document.querySelector('.centers-section');
      centersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 80%;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.scroll-button {
  background-color: #6a0dad;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.scroll-button:hover {
  background-color: #550099;
}
</style>
