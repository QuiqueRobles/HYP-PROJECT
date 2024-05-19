<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img class="logo" src="@/public/logo.png" alt="Logo">
        </a>
        <div class="navbar-burger" @click="toggleMenu" :class="{'is-active': isActive}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div :class="{'navbar-menu': true, 'is-active': isActive}">
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
  name: 'NavBar',
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #ff5ba2;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-burger {
  display: flex;
}

@media (max-width: 768px) {
  .navbar-burger {
    display: block;
  }

  .navbar-menu {
    display: none;
  }

  .navbar-menu.is-active {
    display: block;
  }

  .navbar-end {
    flex-direction: column;
    align-items: center;
  }

  .navbar-item {
    margin-bottom: 0.5rem;
  }
}

.navbar-menu {
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}

.navbar-item {
  color: white;
  font-weight: bold;
  margin-right: 1rem; /* Ajusta el espacio entre los elementos según sea necesario */
  transition: color 0.3s;
}

.navbar-item:hover {
  color: #ffd1e8;
}

.logo {
  max-height: 3rem; /* Ajusta este valor según sea necesario */
  margin-right: auto;
}

.is-active {
  display: block !important;
}
</style>