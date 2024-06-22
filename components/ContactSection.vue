<template>
  <section class="contact-section">
    <h2 class="contact-title">{{ title }}</h2>
    <address class="contact-details">
      <p class="contact-address">{{ address }}</p>
      <p class="contact-phone">{{ phone }}</p>
      <a :href="'mailto:' + email" class="contact-email">{{ email }}</a>
    </address>
    <div class="contact-services">
      <h3>Our Services</h3>
      <ul>
        <li v-for="service in services" :key="service">{{ service }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
:root {
  --primary-color: #333;
  --secondary-color: #666;
  --accent-color: #007bff;
  --background-color: #f9f9f9;
}

.contact-section {
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.contact-details {
  font-style: normal;
  margin-bottom: 1.5rem;
}

.contact-details p,
.contact-details a {
  margin: 0.5rem 0;
  color: var(--secondary-color);
}

.contact-details a {
  color: var(--accent-color);
  text-decoration: none;
}

.contact-details a:hover {
  text-decoration: underline;
}

.contact-services h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.contact-services ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-services li {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
}
</style>
