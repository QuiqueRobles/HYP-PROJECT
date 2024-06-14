<template>
  <div class="image-slider">
    <div class="slider-container">
      <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <img :src="image.src" :alt="image.alt" class="slide-image" />
        </div>
      </div>
      <button class="nav prev" @click="prevSlide">❮</button>
      <button class="nav next" @click="nextSlide">❯</button>
    </div>
    <div class="indicators">
      <span v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ImageSlider',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const currentIndex = ref(0);

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    };

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
    };

    const goToSlide = (index) => {
      currentIndex.value = index;
    };

    return { currentIndex, nextSlide, prevSlide, goToSlide };
  }
};
</script>

<style scoped>
.image-slider {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
}

.slide-image {
  width: 100%;
  height: auto;
  display: block;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicators span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.indicators span.active {
  background-color: #6a0dad;
}
</style>
