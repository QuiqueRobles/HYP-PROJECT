<template>
  <div class="carousel-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" class="carousel-image">
      </swiper-slide>
      <div class="swiper-pagination"></div>
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
          el: '.swiper-pagination',
          clickable: true // Permite hacer clic en la paginación para navegar
        }
      },
      images: [
        require('@/public/logo.png') // Ruta de tu imagen logo.png
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
  width: 100%; /* Opcional: ajusta el ancho al 100% del contenedor */
  height: auto; /* Altura automática para mantener la proporción */
}

.swiper-pagination {
  bottom: 10px; /* Posiciona la paginación en la parte inferior */
}
</style>
