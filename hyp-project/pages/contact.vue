<template>
  <div class="container">
    <h1>Contacts</h1>
    <p>Contact Us for More Information</p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="surname" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>

      <!-- Nuevo campo para opciones múltiples -->
      <div class="form-group">
        <label for="interest">You need more information about:</label>
        <select id="interest" v-model="interest" class="form-control" multiple>
          <option value="Projects">Projects</option>
          <option value="Services">Services</option>
          <option value="Activities">Activities</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" class="form-control" rows="5" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      interest: [],
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar los datos del formulario a tu servidor o hacer alguna otra acción
      console.log('Form submitted with data:', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        interest: this.interest,
        message: this.message
      });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
}

input[type="text"],
input[type="email"],
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-sizing: border-box;
}

textarea {
  resize: vertical; /* Permite redimensionar verticalmente el campo de texto */
}

button {
  cursor: pointer;
}
</style>