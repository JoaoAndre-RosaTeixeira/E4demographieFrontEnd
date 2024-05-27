<template>
  <div class="home">
    <h1>Bienvenue sur E4 Population Prediction</h1>
    <p>
      Ce projet vise à prédire la population des communes françaises en utilisant des modèles ARIMA.
      L'application permet aux utilisateurs de sélectionner une commune, un département ou une région,
      et d'entrer une année cible pour obtenir des prédictions de population.
    </p>
    <p>
      Les prédictions sont générées par une API externe, et les résultats sont affichés
      dans une interface.
    </p>
    <img src="@/assets/background.jpeg" alt="Image de fond" class="background-image">
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
</style>
