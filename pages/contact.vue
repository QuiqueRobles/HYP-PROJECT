<template>
  <div class="container">
    <!-- Eliminar la palabra "CONTACT" -->
    <!-- Título principal centrado con el nuevo estilo -->
    <h1 class="title">CONTACT US</h1>

    <!-- Subtítulos alineados a la izquierda -->
    <p class="subtitle left-aligned">
      If you have any questions, please fill out the form below and we will get in touch with you shortly. You can also call us or even come visit us.
    </p>
    <p class="subtitle left-aligned">We look forward to seeing you soon!</p>

    <!-- Título del mensaje alineado a la izquierda -->
    <p class="message-title left-aligned">Send us a message:</p>

    <!-- Formulario de contacto -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>

      <div class="form-group">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="surname" class="form-control" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>

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
        <textarea
            id="message"
            v-model="message"
            class="form-control"
            rows="5"
            required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- Mensaje de éxito tras el envío del formulario -->
    <div v-if="showSuccessMessage" class="success-message">
      Message sent. We will contact you soon.
    </div>

    <div class="separator"></div>

    <!-- Información de contacto -->
    <div class="contact-info">
      <div class="contact-info-item">
        <p class="contact-label">
          <span class="icon">📞</span> Call us:
        </p>
        <p class="contact-detail">+39 691718090</p>
      </div>
      <div class="contact-info-item">
        <p class="contact-label">
          <span class="icon">✉️</span> Email:
        </p>
        <p class="contact-detail">
          <a href="mailto:anti_violence@gmail.com">anti_violence@gmail.com</a>
        </p>
      </div>
    </div>

    <!-- Síguenos en redes sociales -->
    <div class="follow-us">
      <p class="follow-label">Follow us:</p>
      <div class="social-icons">
        <a href="#" target="_blank" class="social-icon"><span class="icon">🌐</span></a>
        <a href="#" target="_blank" class="social-icon"><span class="icon">🐦</span></a>
        <a href="#" target="_blank" class="social-icon"><span class="icon">▶️</span></a>
      </div>
    </div>
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
      message: '',
      showSuccessMessage: false // Controlar la visibilidad del mensaje de éxito
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        interest: this.interest,
        message: this.message
      });
      this.showSuccessMessage = true; // Mostrar mensaje de éxito después de enviar
      setTimeout(() => {
        this.showSuccessMessage = false; // Ocultar el mensaje después de unos segundos
      }, 5000); // Ocultar después de 5 segundos (5000 ms)
    }
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

/* Título principal centrado y estilizado */
.title {
  font-size: 36px; /* Tamaño del texto */
  color: #4a148c; /* Color púrpura */
  text-align: center; /* Centrar texto */
  margin-bottom: 40px; /* Espaciado inferior */
}

/* Subtítulos alineados a la izquierda */
.subtitle.left-aligned {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: left; /* Alinear a la izquierda */
}

/* Título del mensaje alineado a la izquierda */
.message-title.left-aligned {
  color: purple;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: left; /* Alinear a la izquierda */
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
}

input[type='text'],
input[type='email'],
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid purple; /* Bordes púrpura */
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: #f3e5f5; /* Fondo lila */
}

textarea {
  resize: vertical; /* Permitir redimensionar verticalmente */
}

button {
  cursor: pointer;
  background-color: #d1c4e9; /* Botón lila claro */
  border: none;
  color: white; /* Texto blanco */
  padding: 0.3rem;
}

button.btn-primary {
  background-color: #771daf; /* Botón púrpura oscuro */
  border-color: #d1c4e9;
  color: white;
}

.separator {
  width: 100%;
  height: 0.1cm;
  background-color: #771daf;
  margin: 2rem 0;
}

.contact-info {
  display: flex;
  justify-content: space-between;
}

.contact-info-item {
  flex: 1;
}

.contact-label {
  color: purple;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.contact-detail {
  color: purple;
  font-size: 1.2rem;
}

.contact-detail a {
  color: purple;
  text-decoration: none;
}

.icon {
  font-size: 1.5rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.follow-us {
  margin-top: 2rem;
  text-align: center;
}

.follow-label {
  color: purple;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  color: purple;
  font-size: 2rem;
  text-decoration: none;
}

/* Estilos para el mensaje de éxito */
.success-message {
  text-align: center;
  color: #771daf;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>