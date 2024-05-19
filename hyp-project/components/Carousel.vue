<template>
  <div class="carousel-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" class="carousel-image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      images: [
        'logo.png', // Ruta de tus imágenes
        'logo.png',
        'logo.png'
      ]
    }
  }
}
</script>

<style scoped>
.carousel-container {
  max-width: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 200px; /* Ancho fijo para las imágenes */
  height: auto; /* Altura automática para mantener la proporción */
}
</style>
