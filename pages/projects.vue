<template>
  <div>
    <h1>Projects List</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <img :src="project.picture_url" :alt="project.title" width="100" />
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
    <h2>Add a New Project</h2>
    <form @submit.prevent="addNewProject">
      <input v-model="newProject.title" placeholder="Title" required />
      <input v-model="newProject.picture_url" placeholder="Picture URL" required />
      <textarea v-model="newProject.description" placeholder="Description" required></textarea>
      <input v-model="newProject.responsible_person_id" placeholder="Responsible Person ID" type="number" required />
      <button type="submit">Add Project</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProjectsStore } from '~/stores/projects';

const store = useProjectsStore();
const projects = store.projects;
const newProject = ref({ title: '', picture_url: '', description: '', responsible_person_id: 0 });

function addNewProject() {
  store.addProject({ ...newProject.value });
  newProject.value = { title: '', picture_url: '', description: '', responsible_person_id: 0 };
}
</script>

<style scoped>
form {
  margin-top: 20px;
}
input, textarea {
  display: block;
  margin: 5px 0;
}
img {
  border-radius: 50%;
}
</style>
