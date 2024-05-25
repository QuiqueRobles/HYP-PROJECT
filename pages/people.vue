<template>
  <div>
    <h1>People List</h1>
    <ul>
      <li v-for="person in people" :key="person.id">
        <img :src="person.picture_url" :alt="person.name" width="100" />
        <h2>{{ person.name }}</h2>
        <p>{{ person.cv }}</p>
      </li>
    </ul>
    <h2>Add a New Person</h2>
    <form @submit.prevent="addNewPerson">
      <input v-model="newPerson.name" placeholder="Name" required />
      <input v-model="newPerson.picture_url" placeholder="Picture URL" required />
      <textarea v-model="newPerson.cv" placeholder="CV" required></textarea>
      <button type="submit">Add Person</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePeopleStore } from '~/stores/people';

const store = usePeopleStore();
const people = store.people;
const newPerson = ref({ name: '', picture_url: '', cv: '' });

function addNewPerson() {
  store.addPerson({ ...newPerson.value });
  newPerson.value = { name: '', picture_url: '', cv: '' };
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
