<template>
  <PeopleIntroduction />
  <div class="people-list">
    <div class="list-header">
      <h1>People List</h1>
      <div class="search-container">
        <input 
          v-model="searchQuery" 
          type="text" 
          class="search-bar" 
          placeholder="Search by name or ID"
        />
        <i class="search-icon">🔍</i> <!-- Puedes usar un icono mejor como FontAwesome -->
      </div>
    </div>
    <ul>
      <li v-for="person in filteredPeople" :key="person.id" :id="`person-${person.id}`" class="person-card">
        <img :src="person.picture_url" :alt="person.name" class="person-avatar" />
        <div class="person-details">
          <h2>{{ person.name }}</h2>
          <p>{{ person.cv }}</p>
          <div v-if="getServices(person.id).length || getProjects(person.id).length">
            <h3>Responsibilities</h3>
            <ul v-if="getServices(person.id).length">
              <li v-for="service in getServices(person.id)" :key="service.id">
                <nuxt-link class="link-item" :to="{ path: `/service${service.id}`, query: { serviceId: service.id } }">{{ service.title }}</nuxt-link>
              </li>
            </ul>
            <ul v-if="getProjects(person.id).length">
              <li v-for="project in getProjects(person.id)" :key="project.id">
                <nuxt-link class="link-item" :to="{ path: `/project${project.id}`, query: { projectId: project.id } }">{{ project.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { usePeopleStore } from '~/stores/people';
import { useServicesStore } from '~/stores/services';
import { useProjectsStore } from '~/stores/projects';
import PeopleIntroduction from '@/components/PeopleIntroduction.vue';

const peopleStore = usePeopleStore();
const servicesStore = useServicesStore();
const projectsStore = useProjectsStore();
const loading = ref(true);
const searchQuery = ref('');

onMounted(async () => {
  try {
    await peopleStore.fetchPeople();
    await servicesStore.fetchServices();
    await projectsStore.fetchProjects();
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
});

const people = computed(() => peopleStore.people);

const getServices = (personId) => {
  return servicesStore.services.filter(service => service.responsible_person_id === personId);
};

const getProjects = (personId) => {
  return projectsStore.projects.filter(project => project.responsible_person_id === personId);
};

const filteredPeople = computed(() => {
  return people.value.filter(person =>
    person.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    person.id.toString().includes(searchQuery.value)
  );
});
</script>

<style scoped>
.people-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 2em;
  color: #4a148c;
}

.search-container {
  position: relative;
  width: 300px;
}

.search-bar {
  width: 100%;
  padding: 10px;
  padding-right: 30px; /* Espacio para el icono */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Para que no interfiera con la entrada */
}

.person-card {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.person-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.person-avatar {
  border-radius: 50%;
  margin-right: 20px;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.person-details {
  flex: 1;
}

h2 {
  font-size: 1.5em;
  color: #333;
}

h3 {
  font-size: 1.2em;
  color: #4a148c;
  margin-top: 10px;
}

p {
  color: #555;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

.link-item {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.link-item:hover {
  color: #0056b3;
}
</style>
