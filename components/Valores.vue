<template>
  <div class="valores-section">
    <h2>Our Values</h2>
    <div class="value-card">
      <transition name="fade">
        <p :key="currentValueIndex">{{ values[currentValueIndex] }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [
        "Support and Solidarity",
        "Empowerment of Women",
        "Confidentiality and Respect",
        "Legal Assistance",
        "Psychological Support",
        "24/7 Helpline",
        "Safe Shelter",
        "Educational Programs"
      ],
      currentValueIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startValueRotation();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startValueRotation() {
      this.intervalId = setInterval(() => {
        this.currentValueIndex = (this.currentValueIndex + 1) % this.values.length;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.valores-section {
  padding: 50px 20px;
  background-color: #e7daf3;
  border-radius: 8px;
  text-align: center;
}

.valores-section h2 {
  font-size: 32px;
  color: #34167a;
  margin-bottom: 20px;
}

.value-card {
  background-color: #ffffff;
  border: 2px solid #502a96;
  border-radius: 8px;
  padding: 20px;
  font-size: 20px;
  color: #502a96;
  transition: all 0.5s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
