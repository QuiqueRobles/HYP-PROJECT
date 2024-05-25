import { defineStore } from 'pinia';
import { useFetch } from '#app';

interface Person {
  id: number;
  name: string;
  picture_url: string;
  cv: string;
}

export const usePeopleStore = defineStore('people', () => {
  const people = reactive([] as Person[]);

  async function addPerson(person: Person) {
    const body = JSON.stringify(person);
    const response = await fetch('/api/people', { method: 'POST', body });
    if (response.ok) people.push(person);
  }

  async function init() {
    const { data } = await useFetch<any[]>('/api/people');
    const list = data.value;
    if (list != null) {
      people.splice(0, people.length);  // Clear the list
      people.push(...list);
    }
  }

  init();

  return { people, addPerson };
});
