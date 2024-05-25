<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <button @click="toggleAccordion(index)" class="accordion-button">
        {{ item.title }}
      </button>
      <div v-if="activeIndex === index" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
.accordion-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.accordion-button {
  width: 100%;
  padding: 1rem;
  background-color: #6a0dad;
  color: white;
  border: none;
  text-align: center; /* Centering titles */
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.4rem;
}

.accordion-button:hover {
  background-color: #550099;
}

.accordion-content {
  padding: 1rem;
  background-color: #fff;
  font-size: 1.3rem;
}
</style>
