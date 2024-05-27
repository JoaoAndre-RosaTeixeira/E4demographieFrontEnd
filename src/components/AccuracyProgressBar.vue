<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: accuracyWidth }">{{ formattedAccuracy }}%</div>
  </div>
</template>

<script>
export default {
  name: 'AccuracyProgressBar',
  props: {
    accuracy: {
      type: Number,
      required: true
    }
  },
  computed: {
    accuracyWidth() {
      return `${this.accuracy}%`;
    },
    formattedAccuracy() {
      return this.accuracy.toFixed(2); // Formater avec deux chiffres après la virgule
    }
  }
};
</script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 25px;
    overflow: hidden;
  }
  
  .progress {
    height: 25px;
    background-color: #4caf50;
    text-align: center;
    color: white;
    border-radius: 25px 0 0 25px;
    transition: width 0.5s ease-in-out;
  }
  </style>
  