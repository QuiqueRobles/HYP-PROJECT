<template>

  <div class="resource-card">
    <router-link :to="resource.projectLink">
      <img :src="resource.image" :alt="`Image of ${resource.title}`" class="resource-image">   
      <div class="resource-details">
          <h3>{{ resource.title }}</h3>
      </div> 
    </router-link>

    <div class="responsible-details">
      <br>
      <hr>
      <p>Responsible person:</p>
      <div class="responsible-person">
        <img :src="resource.responsible_image" :alt="`Image of ${resource.responsible}`" class="responsible-image" />
        <div class="responsible-name">
          <router-link class="link-item" v-if="resource.responsibleId" :to="{ path: '/people', hash: `#person-${resource.responsibleId}` }">{{ resource.responsible }}</router-link>
          <span v-else>{{ resource.responsible }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@keyframes neon-border {
  0% {
    box-shadow: 0 0 5px #9400D3, 0 0 10px #9400D3, 0 0 15px #9400D3, 0 0 20px #9400D3, 0 0 25px #9400D3, 0 0 30px #9400D3, 0 0 35px #9400D3;
  }
  50% {
    box-shadow: 0 0 10px #9400D3, 0 0 20px #9400D3, 0 0 30px #9400D3, 0 0 40px #9400D3, 0 0 50px #9400D3, 0 0 60px #9400D3, 0 0 70px #9400D3;
  }
  100% {
    box-shadow: 0 0 5px #9400D3, 0 0 10px #9400D3, 0 0 15px #9400D3, 0 0 20px #9400D3, 0 0 25px #9400D3, 0 0 30px #9400D3, 0 0 35px #9400D3;
  }
}

.resource-card {
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: 1rem auto;
  transition: border 0.3s, box-shadow 0.3s;
  position: relative; /* Required for pseudo-element */
}

.resource-card:hover {
  border: 2px solid #9400D3;
  animation: neon-border 1.5s infinite alternate;
}

.resource-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.resource-details {
  flex: 1;
}

.responsible-details {
  width: 100%;
  text-align: left;
}

.responsible-person {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.responsible-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.responsible-name {
  flex: 1;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
}

.link-item {
  color: #6a0dad;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
}

.link-item:hover {
  text-decoration: underline;
}

.project-title{
  color: #6a0dad;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
}

.project-title:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .resource-card {
    padding: 1rem;
  }

  .resource-image {
    max-height: 200px;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }
}
</style>
