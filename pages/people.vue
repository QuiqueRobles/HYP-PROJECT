<template>
  <PeopleIntroduction />
  <div class="people-list">
    <h1>People List</h1>
    <ul>
      <li v-for="person in people" :key="person.id" class="person-card">
        <img :src="person.picture_url" :alt="person.name" class="person-avatar" />
        <div class="person-details">
          <h2>{{ person.name }}</h2>
          <p>{{ person.cv }}</p>

          <div v-if="getServices(person.id).length || getProjects(person.id).length"> 
            <h3>Responsibilities</h3>
            <ul v-if="getServices(person.id).length">
              <li v-for="service in getServices(person.id)" :key="service.id">
                <nuxt-link class="link-item" :to="{ path: '/services', query: { index: service.id - 1} }">{{ service.title }}</nuxt-link>
              </li>
            </ul>
            <ul v-if="getProjects(person.id).length">
              <li v-for="project in getProjects(person.id)" :key="project.id">
                <nuxt-link class="link-item" to="/projects">{{ project.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>

    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePeopleStore } from '~/stores/people';
import { useServicesStore } from '~/stores/services';
import { useProjectsStore } from '~/stores/projects';
import PeopleIntroduction from '@/components/PeopleIntroduction.vue';

const store = usePeopleStore();
const servicesStore = useServicesStore();
const projectsStore = useProjectsStore();
const people = store.people;
const newPerson = ref({ name: '', picture_url: '', cv: '' });

function addNewPerson() {
  store.addPerson({ ...newPerson.value });
  newPerson.value = { name: '', picture_url: '', cv: '' };
}

function getServices(personId) {
  return servicesStore.services.filter(service => service.responsible_person_id === personId);
}

function getProjects(personId) {
  return projectsStore.projects.filter(project => project.responsible_person_id === personId);
}
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

h1 {
  font-size: 2em;
  color: #4a148c;
  text-align: center;
  margin-bottom: 20px;
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

.add-person {
  margin-top: 40px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-person-form {
  display: grid;
  grid-gap: 15px;
}

.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.submit-button {
  padding: 10px 20px;
  background-color: #4a148c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #7b1fa2;
}
</style>
