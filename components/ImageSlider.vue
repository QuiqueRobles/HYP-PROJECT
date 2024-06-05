<template>
  <div class="image-slider">
    <div class="slider-container" :style="{ width: `${slideWidth}px`, height: `${slideHeight}px`, transform: `translateX(-${currentSlide * slideWidth}px)` }">
      <div class="slider-slide" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
    <button class="slider-button prev" @click="prevSlide">❮</button>
    <button class="slider-button next" @click="nextSlide">❯</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slideWidth: 800, // Ajustar el ancho del carrusel
      slideHeight: 400, // Ajustar la altura del carrusel
      images: [
        { src: 'public/carrusel-3.jpg', alt: 'Image 1' },
        { src: 'public/carrusel-2.jpg', alt: 'Image 2' },
        { src: 'public/carrusel-1.jpeg', alt: 'Image 3' }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    }
  }
}
</script>

<style scoped>
.image-slider {
  position: relative;
  max-width: 100%;
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
}

.slider-slide {
  min-width: 100%;
}

.image-slider img {
  width: 100%;
  height: auto;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(94, 58, 127, 0.7);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  font-size: 24px;
}

.slider-button.prev {
  left: 10px;
}

.slider-button.next {
  right: 10px;
}

.slider-button:hover {
  background-color: rgba(94, 58, 127, 0.9);
}
</style>
