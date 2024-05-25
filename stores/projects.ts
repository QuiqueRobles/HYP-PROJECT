import { defineStore } from 'pinia';
import { useFetch } from '#app';

interface Project {
  id: number;
  title: string;
  picture_url: string;
  description: string;
  responsible_person_id: number;
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = reactive([] as Project[]);

  async function addProject(project: Project) {
    const body = JSON.stringify(project);
    const response = await fetch('/api/projects', { method: 'POST', body });
    if (response.ok) projects.push(project);
  }

  async function init() {
    const { data } = await useFetch<any[]>('/api/projects');
    const list = data.value;
    if (list != null) {
      projects.splice(0, projects.length);  // Clear the list
      projects.push(...list);
    }
  }

  init();

  return { projects, addProject };
});
