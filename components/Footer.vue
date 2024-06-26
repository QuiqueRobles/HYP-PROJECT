<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>© 2024 Women's Support Center. All Rights Reserved.</p>
      <br>
      <div class="footer-links">
        <nuxt-link class="footer-link" to="/" aria-label="Home">Home</nuxt-link>
        <nuxt-link class="footer-link" to="/about" aria-label="Who we are">Who we are</nuxt-link>
        <nuxt-link class="footer-link" to="/projects" aria-label="Projects">Projects</nuxt-link>
        <nuxt-link class="footer-link" to="/services" aria-label="Services">Services</nuxt-link>
        <nuxt-link class="footer-link" to="/contact" aria-label="Contact">Contact</nuxt-link>
        <nuxt-link class="footer-link" to="/people" aria-label="People">People</nuxt-link>
      </div>
      <div>
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #6a1b9a;
  color: white;
  padding: 1rem 0;
}

.footer-link {
  color: white;
  margin: 0 0.5rem;
  transition: color 0.3s, text-shadow 0.3s, text-decoration 0.3s;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-links {
  margin-bottom: 1rem;
}
</style>

