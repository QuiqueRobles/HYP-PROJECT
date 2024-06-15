<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img class="logo" src="@/assets/logo.png" alt="Logo">
          <span class="navbar-title">Anti-Violence Centers</span>
        </nuxt-link>
        <button
          class="navbar-burger"
          @click="toggleMenu"
          :class="{'is-active': isActive}"
          aria-expanded="isActive"
          aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div :class="{'navbar-menu': true, 'is-active': isActive}">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">Who we are</nuxt-link>
          <nuxt-link class="navbar-item" to="/services">Services</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
          <nuxt-link class="navbar-item" to="/people">People</nuxt-link>
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
  background-color: #6a1b9a;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-burger {
  display: none;
  cursor: pointer;
  border: none;
  background: transparent;
}

.navbar-burger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: transform 0.3s, opacity 0.3s;
}

.navbar-burger.is-active span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

@media (max-width: 1024px) {
  .navbar-burger {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #6a1b9a;
    padding: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-end {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .navbar-item {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .navbar-menu {
    display: flex !important;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .navbar-end {
    display: flex;
    align-items: center;
  }

  .navbar-item {
    margin-right: 1rem;
  }
}

.navbar-item {
  color: white;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
}

.navbar-item:after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #ffd1e8;
  transition: width 0.3s;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.navbar-item:hover {
  color: #ffd1e8;
  transform: scale(1.05);
}

.navbar-item:hover:after {
  width: 100%;
}

.logo {
  max-height: 3rem;
  margin-right: 1rem;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
</style>
