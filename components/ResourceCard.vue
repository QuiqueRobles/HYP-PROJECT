<template>
  <div class="resource-card">
    <img :src="resource.image" alt="Resource Image" class="resource-image">
    <div class="resource-details">
      <h3>{{ resource.title }}</h3>
      <p>{{ resource.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.resource-card {
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.resource-image {
  width: 100%; /* Ajusta el ancho de la imagen al 100% del contenedor */
  max-height: 200px; /* Establece una altura máxima para la imagen */
  object-fit: cover; /* Escala la imagen para cubrir todo el contenedor */
  border-radius: 8px; /* Agrega bordes redondeados */
  margin-bottom: 1rem; /* Añade un margen inferior para separar la imagen de los detalles */
}

.resource-details {
  flex: 1; /* Permite que los detalles del recurso ocupen todo el espacio disponible */
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
}
</style>
