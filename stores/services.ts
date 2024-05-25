// stores/services.ts
import { defineStore } from 'pinia';
import { useFetch } from '#app';

interface Service {
  id: number;
  title: string;
  picture_url: string;
  description: string;
  practical_info: string;
  responsible_person_id: number;
}

export const useServicesStore = defineStore('services', () => {
  const services = ref<Service[]>([]);

  async function addService(service: Service) {
    const body = JSON.stringify(service);
    const response = await fetch('/api/services', { method: 'POST', body });
    if (response.ok) services.value.push(service);
  }

  async function init() {
    const { data } = await useFetch<Service[]>('/api/services');
    services.value = data.value || [];
  }

  init();

  return { services, addService };
});
