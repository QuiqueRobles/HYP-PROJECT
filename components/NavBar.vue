<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/" aria-label="Home">
          <img class="logo" src="@/assets/logo.png" alt="Anti-Violence Centers Logo">
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
          <nuxt-link class="navbar-item" to="/" aria-label="Home">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about" aria-label="Who we are">Who we are</nuxt-link>
          <div class="navbar-item has-dropdown" :class="{'is-active': isProjectsActive}">
            <nuxt-link class="navbar-link" to="/projects" aria-label="Projects" @click="handleProjectsClick">Projects</nuxt-link>
            <div class="navbar-dropdown" v-if="projects.length">
              <nuxt-link v-for="project in projects" :key="project.id" class="navbar-item" :to="'/project' + project.id" :aria-label="project.title">{{ project.title }}</nuxt-link>
            </div>
          </div>
          <div class="navbar-item has-dropdown" :class="{'is-active': isServicesActive}">
            <nuxt-link class="navbar-link" to="/services" aria-label="Services" @click="handleServicesClick">Services</nuxt-link>
            <div class="navbar-dropdown" v-if="services.length">
              <nuxt-link v-for="service in services" :key="service.id" class="navbar-item" :to="'/service' + service.id" :aria-label="service.title">{{ service.title }}</nuxt-link>
            </div>
          </div>
          <nuxt-link class="navbar-item" to="/contact" aria-label="Contact">Contact</nuxt-link>
          <nuxt-link class="navbar-item" to="/people" aria-label="People">People</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useProjectsStore } from '~/stores/projects';
import { useServicesStore } from '~/stores/services';

export default {
  name: 'NavBar',
  setup() {
    const isActive = ref(false);
    const isProjectsActive = ref(false);
    const isServicesActive = ref(false);
    const projectsStore = useProjectsStore();
    const servicesStore = useServicesStore();

    const toggleMenu = () => {
      isActive.value = !isActive.value;
    };

    const toggleProjectsDropdown = () => {
      isProjectsActive.value = !isProjectsActive.value;
    };

    const toggleServicesDropdown = () => {
      isServicesActive.value = !isServicesActive.value;
    };

    const handleProjectsClick = (event) => {
      toggleProjectsDropdown();
    };

    const handleServicesClick = (event) => {
      toggleServicesDropdown();
    };

    onMounted(async () => {
      try {
        await projectsStore.fetchProjects();
        await servicesStore.fetchServices();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      isActive,
      isProjectsActive,
      isServicesActive,
      projects: projectsStore.projects,
      services: servicesStore.services,
      toggleMenu,
      toggleProjectsDropdown,
      toggleServicesDropdown,
      handleProjectsClick,
      handleServicesClick
    };
  }
};
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
    align-items: flex-start;
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
    align-items: flex-start;
    width: 100%;
  }

  .navbar-item {
    margin: 0.5rem 0;
    width: 100%;
    text-align: left;
    padding: 0.75rem 1rem;
  }

  .navbar-dropdown {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background-color: #6a1b9a;
    padding: 0.5rem 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    width: calc(100% - 2rem); /* Hacer más ancho el menú desplegable */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar-item.has-dropdown.is-active .navbar-dropdown {
    display: flex;
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

  .navbar-dropdown {
    display: none;
    position: absolute;
    background-color: #6a1b9a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    top: 100%;
    left: 0;
    padding: 0.5rem 0;
    width: 250px; /* Ajustar el ancho del menú desplegable */
  }

  .navbar-item.has-dropdown:hover .navbar-dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.navbar-item {
  color: white;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  font-size: 0.9rem; /* Reducir el tamaño del texto */
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

.navbar-link {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
}

.navbar-link:hover {
  color: #ffd1e8;
}

.navbar-dropdown .navbar-item {
  padding: 0.5rem 1rem;
  width: 100%;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: background-color 0.3s;
}

.navbar-dropdown .navbar-item:hover {
  background-color: #4e1577;
}
</style>
