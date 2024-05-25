// stores/people.ts
import { defineStore } from 'pinia';
import { useFetch } from '#app';

interface Person {
  id: number;
  name: string;
  picture_url: string;
  cv: string;
}

export const usePeopleStore = defineStore('people', () => {
  const people = ref<Person[]>([]);

  async function addPerson(person: Person) {
    const body = JSON.stringify(person);
    const response = await fetch('/api/people', { method: 'POST', body });
    if (response.ok) people.value.push(person);
  }

  async function init() {
    const { data } = await useFetch<Person[]>('/api/people');
    people.value = data.value || [];
  }

  init();

  return { people, addPerson };
});
