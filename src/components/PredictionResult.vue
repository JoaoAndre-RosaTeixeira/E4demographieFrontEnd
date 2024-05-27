<template>
  <div>
    <h2>Prediction Result</h2>
    <p>Code: {{ result.code }}</p>
    <p>Nom: {{ result.nom }}</p>
    <p>Population Prédite: {{ result.predicted_population }}</p>
    <p>Année Cible: {{ result.target_year }}</p>
    <p>Accuracy:</p>
    <AccuracyProgressBar :accuracy="result.accuracy" />
    <div v-if="result.plot_url">
      <img :src="result.plot_url" alt="Population Forecast Plot" />
    </div>
    <div v-if="result.monitoring_url">
      <img :src="result.monitoring_url" alt="Monitoring Plot" />
    </div>
  </div>
</template>

<script>
import AccuracyProgressBar from './AccuracyProgressBar.vue';

export default {
  name: 'PredictionResult',
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  components: {
    AccuracyProgressBar
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
