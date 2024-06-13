<template>
  <div class="people-list">
    <h1>People List</h1>
    <ul>
      <li v-for="person in people" :key="person.id" class="person-card">
        <img :src="person.picture_url" :alt="person.name" width="100" class="person-avatar" />
        <div class="person-details">
          <h2>{{ person.name }}</h2>
          <p>{{ person.cv }}</p>

          <div v-if="getServices(person.id).length || getProjects(person.id).length"> 
            <h3> <br> Responsibilities</h3>
            <ul v-if="getServices(person.id).length">
              <li v-for="service in getServices(person.id)" :key="service.id">
                <nuxt-link class="link-item" :to="{ path: '/services', query: { index: service.id - 1} }">{{ service.title }}</nuxt-link>
              </li>
            </ul>
            <ul v-if="getProjects(person.id).length">
              <li v-for="project in getProjects(person.id)" :key="project.id">
                <nuxt-link class="link-item" to="/projects"> {{ project.title }} </nuxt-link>
              </li>
            </ul>
          </div>

        </div>
      </li>
    </ul>
    <div class="add-person">
      <h2>Add a New Person</h2>
      <form @submit.prevent="addNewPerson" class="add-person-form">
        <input v-model="newPerson.name" placeholder="Name" required class="input-field" />
        <input v-model="newPerson.picture_url" placeholder="Picture URL" required class="input-field" />
        <textarea v-model="newPerson.cv" placeholder="CV" required class="input-field"></textarea>
        <button type="submit" class="submit-button">Add Person</button>
      </form>
    </div>
  </div>
  <br><br>
</template>

<script setup>
import { ref } from 'vue';
import { usePeopleStore } from '~/stores/people';
import { useServicesStore } from '~/stores/services';
import { useProjectsStore } from '~/stores/projects';

const store = usePeopleStore();
const servicesStore = useServicesStore();
const projectsStore = useProjectsStore();
const people = store.people;
const newPerson = ref({ name: '', picture_url: '', cv: '' });

function addNewPerson() {
  store.addPerson({ ...newPerson.value });
  newPerson.value = { name: '', picture_url: '', cv: '' };
}

function getServices(personId){
  return servicesStore.services.reduce((acc, service) => {
    if (service.responsible_person_id === personId) {
        acc.push(service);
    }
    return acc;
}, []);
}

function getProjects(personId){
  return projectsStore.projects.reduce((acc, project) => {
    if (project.responsible_person_id === personId) {
        acc.push(project);
    }
    return acc;
}, []);
}

</script>

<style scoped>
.people-list {
  max-width: 800px;
  margin: 0 auto;
}

.person-card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 8px;
}

.person-avatar {
  border-radius: 50%;
  margin-right: 20px;
}

.person-details {
  flex: 1;
}

.add-person {
  margin-top: 40px;
}

.add-person-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.link-item {
  color: rgb(57, 147, 178);
  text-decoration: none;
}

.link-item:hover {
  color:#6a1b9a;
  text-decoration: underline;
}

</style>
