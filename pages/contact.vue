<template>
  <div class="container">
    <h1 class="title">CONTACT US</h1>

    <p class="subtitle left-aligned">
      If you have any questions, please fill out the form below and we will get in touch with you shortly. You can also
      call us or even come visit us.
    </p>
    <p class="subtitle left-aligned">We look forward to seeing you soon!</p>

    <p class="message-title left-aligned">Send us a message:</p>

    <form @submit.prevent="submitForm" class="contact-form">
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
        <textarea id="message" v-model="message" class="form-control" rows="5" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div v-if="showSuccessMessage" class="success-message">
      Message sent. We will contact you soon.
    </div>

    <div class="separator"></div>

    <div class="contact-section">
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

      <div class="follow-us">
        <p class="follow-label">Follow us:</p>
        <div class="social-icons">
          <a href="#" target="_blank" class="social-icon"><span class="icon">🌐</span></a>
          <a href="#" target="_blank" class="social-icon"><span class="icon">🐦</span></a>
          <a href="#" target="_blank" class="social-icon"><span class="icon">▶️</span></a>
        </div>
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
      showSuccessMessage: false
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
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.title {
  font-size: 2.5rem;
  color: #4a148c;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle.left-aligned {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: left;
  color: #555;
}

.message-title.left-aligned {
  color: #4a148c;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: left;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4a148c;
}

input[type='text'],
input[type='email'],
textarea,
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #4a148c;
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: #f3e5f5;
}

textarea {
  resize: vertical;
}

button {
  cursor: pointer;
  background-color: #7b1fa2;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

button.btn-primary {
  background-color: #6a1b9a;
}

button:hover {
  background-color: #4a148c;
}

.separator {
  width: 100%;
  height: 2px;
  background-color: #4a148c;
  margin: 2rem 0;
}

.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-info,
.follow-us {
  flex: 1 1 45%;
}

.contact-info-item {
  margin-bottom: 1rem;
}

.contact-label {
  color: #4a148c;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.contact-detail {
  color: #4a148c;
  font-size: 1rem;
}

.contact-detail a {
  color: #4a148c;
  text-decoration: none;
}

.icon {
  font-size: 1.25rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.follow-label {
  color: #4a148c;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #4a148c;
  font-size: 2rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #7b1fa2;
}

.success-message {
  text-align: center;
  color: #4a148c;
  font-size: 1.2rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
  }

  .contact-info,
  .follow-us {
    flex: 1 1 100%;
    margin-right: 0;
  }
}
</style>
