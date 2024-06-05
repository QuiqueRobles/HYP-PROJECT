import { defineStore } from 'pinia';
import { useFetch } from '#app';

interface Testimonial {
  id: number;
  service_id: number;
  testimonial: string;
}

export const useTestimonialsStore = defineStore('testimonials', () => {
  const testimonials = reactive([] as Testimonial[]);

  async function addTestimonial(testimonial: Testimonial) {
    const body = JSON.stringify(testimonial);
    const response = await fetch('/api/testimonials', { method: 'POST', body });
    if (response.ok) testimonials.push(testimonial);
  }

  async function init() {
    const { data } = await useFetch<any[]>('/api/testimonials');
    const list = data.value;
    if (list != null) {
      testimonials.splice(0, testimonials.length);  // Clear the list
      testimonials.push(...list);
    }
  }

  init();

  return { testimonials, addTestimonial };
});
