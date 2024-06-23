<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <button @click="toggleAccordion(index)" class="accordion-button">
        {{ item.title }}
      </button>
      <div v-if="activeIndex === index" class="accordion-content">
        {{ item.content }}
        <hr>
        <p> <br> Responsible person:</p>

        <div class="responsible-person">
          <img :src="item.image" alt="image" class="responsible-image" />
          <div class="responsible-name">
            <router-link class="link-item" :to="{ path: '/people', hash: `#person-${item.responsibleId}` }">{{ item.responsible }}</router-link>
          </div>
        </div>

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

  created() {
    // Retrieve index from query parameter
    const queryIndex = parseInt(this.$route.query.index);
    if (!isNaN(queryIndex)) {
      // Set active index based on query parameter
      this.activeIndex = queryIndex;
    }
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
  text-align: center;
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

.responsible-person {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinea los elementos a la izquierda */
}

.responsible-image {
  width: 50px; /* Tamaño reducido de la imagen */
  height: auto;
  margin-right: 10px; /* Espacio entre la imagen y el nombre */
  border-radius: 50%;
}

.responsible-name {
  flex-grow: 1; /* Permite que el texto se expanda para ocupar todo el espacio restante */
  margin-right: 20px;
}

/* Link style */
.link-item {
  color: #6a0dad;
  text-decoration: none;
}

.link-item:hover {
  text-decoration: underline;
}
</style>
