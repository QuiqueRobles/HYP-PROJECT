<template>
  <div>
    <!-- Navbar -->
    <NavBar />

    <!-- Chatbot -->
    <Chatbot />

    <!-- Contenido de la página -->
    <div class="content">
      <!-- Aquí incluirás el contenido principal de tu aplicación, como las páginas generadas por Nuxt.js -->
      <NuxtPage />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Chatbot from '@/components/Chatbot.vue'

export default {
  components: {
    NavBar,
    Footer,
    Chatbot
  }
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales para el layout si es necesario */
.content {
  padding-top: 3.5rem; /* Ajusta esto según la altura de tu navbar */
}
</style>
