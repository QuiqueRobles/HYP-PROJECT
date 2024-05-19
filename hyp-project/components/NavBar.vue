<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img class="logo" src="@/public/logo.png" alt="Logo">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">Who We Are</nuxt-link>
          <nuxt-link class="navbar-item" to="/services">Our Activities</nuxt-link>
          <nuxt-link class="navbar-item" to="/support">Support Us</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contacts</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: #ff5ba2;
  padding: 1rem;
}

.navbar-item {
  color: white;
  font-weight: bold;
  margin-right: 1rem; /* Ajusta el espacio entre los elementos según sea necesario */
}

.logo {
  max-height: 3rem; /* Ajusta este valor según sea necesario */
}
</style>
