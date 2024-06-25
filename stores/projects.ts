import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFetch } from '#app';

interface Project {
  id: number;
  title: string;
  picture_url: string;
  description: string;
  responsible_person_id: number;
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([]);

  async function addProject(project: Project) {
    const body = JSON.stringify(project);
    const response = await fetch('/api/projects', { method: 'POST', body });
    if (response.ok) projects.value.push(project);
  }

  async function init() {
    const { data, error } = await useFetch<Project[]>('/api/projects');
    if (error.value) {
      console.error('Error fetching projects:', error.value);
      return;
    }
    const list = data.value;
    if (list != null) {
      projects.value = list;
    }
  }

  // Llamar a init al crear el store
  init();

  return { projects, addProject, init };
});
