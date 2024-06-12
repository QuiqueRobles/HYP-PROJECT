<template>
  <div class="resource-card">
    <img :src="resource.image" alt="Resource Image" class="resource-image">
    <div class="resource-details">
      <h3>{{ resource.title }}</h3>
      <p>{{ resource.description }}</p>
      <br>
    </div>

    <div class="responsible-details">
      <hr>
        <p> <br> Responsible person:</p>

        <div class="responsible-person">
          <img :src="resource.responsible_image" alt="image" class="responsible-image" />
          <div class="responsible-name">
            <p>{{ resource.responsible }}</p>
          </div>
        </div>
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
  max-width: 400px; /* Limita el ancho máximo de la tarjeta */
  margin: 1rem auto; /* Centra la tarjeta horizontalmente y añade un margen */
}

.resource-image {
  width: 100%; /* Ajusta el ancho de la imagen al 100% del contenedor */
  max-height: 300px; /* Establece una altura máxima para la imagen */
  object-fit: cover; /* Escala la imagen para cubrir todo el contenedor */
  border-radius: 8px; /* Agrega bordes redondeados */
  margin-bottom: 1rem; /* Añade un margen inferior para separar la imagen de los detalles */
}

.resource-details {
  flex: 1; /* Permite que los detalles del recurso ocupen todo el espacio disponible */
}

.responsible-details {
  width: 100%;
  text-align: left;
}

.responsible-person {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.responsible-image {
  width: 50px; /* Ajusta el ancho de la imagen del responsable */
  height: 50px; /* Ajusta la altura de la imagen del responsable */
  border-radius: 50%; /* Hace la imagen circular */
  margin-right: 0.5rem; /* Añade un margen derecho para separar la imagen del nombre */
}

.responsible-name {
  flex: 1; /* Permite que el nombre del responsable ocupe el espacio disponible */
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
}
</style>
