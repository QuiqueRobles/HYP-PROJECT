<template>
  <div class="valores-section">
    <h3>WOMEN AGAINST VIOLENCE </h3>
    <p>The National Anti-violence Network run by women's organizations</p>
    <div class="valores-container">
      <div class="valor-card" v-for="valor in valores" :key="valor.label">
        <span class="valor-numero">{{ valor.numero }}</span>
        <span class="valor-label">{{ valor.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valores: [
        { label: "Anti-violence centers", numero: 87 },
        { label: "Women listened to in a year", numero: 106 },
        { label: "Activists", numero: 200 },
        { label: "Refuge houses", numero: 2874 },
        { label: "Hotlines", numero: 62 }
      ]
    };
  },
  mounted() {
    this.incrementActivists();
  },
  methods: {
    incrementActivists() {
      setInterval(() => {
        const randomIncrement = Math.floor(Math.random() * 2) + 1;
        const activistsIndex = this.valores.findIndex(valor => valor.label === "Activists");
        if (activistsIndex !== -1) {
          this.valores[activistsIndex].numero += randomIncrement;
        }
      }, 1800);
    }
  }
};
</script>

<style scoped>
.valores-section {
  padding: 40px 20px;
  background-color: #f4f0f8;
  text-align: center;
  border-radius: 8px;
  color: #4a148c;
}

.valores-section h3 {
  font-size: 28px;
  margin-bottom: 10px;
}

.valores-section p {
  font-size: 18px;
  margin-bottom: 30px;
}

.valores-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.valor-card {
  background-color: #fff;
  border: 2px solid #4a148c;
  border-radius: 8px;
  padding: 20px;
  width: 150px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.valor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.valor-numero {
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #7b1fa2;
}

.valor-label {
  font-size: 16px;
  color: #4a148c;
}
</style>
