<template>
  <div class="carousel-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="(`@/public/${image}`)" alt="Carousel Image" class="carousel-image">
      </swiper-slide>
      <!-- Add pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add navigation buttons -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

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
        'logo.png', // Replace with actual image paths
        'logo.png',
        'logo.png'
      ]
    };
  }
};
</script>

<style scoped>
.carousel-container {
  max-width: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 100%; /* Adjust image width as needed */
  height: auto; /* Maintain aspect ratio */
}
</style>
