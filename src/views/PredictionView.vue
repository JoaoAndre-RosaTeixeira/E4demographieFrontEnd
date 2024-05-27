<template>
  <div>
    <RegionSelector :regions="regions" @region-selected="onSelectRegion" />
    <DepartementSelector v-if="region" :departements="departements" @departement-selected="onSelectDepartement" />
    <CommuneSelector v-if="departement" :communes="communes" @commune-selected="onSelectCommune" />
    <div>
      <label for="year">Year:</label>
      <input v-model="year" type="number" id="year" name="year">
    </div>
    <button @click="predict">Predict</button>
    <div v-if="prediction">
      <p>Code: {{ prediction.code }}</p>
      <p>Nom: {{ prediction.nom }}</p>
      <p>Target Year: {{ prediction.target_year }}</p>
      <p>Accuracy: {{ prediction.accuracy }}</p>
      <p>Predicted Population: {{ prediction.predicted_population }}</p>
      <img v-if="prediction.plot_url" :src="getPlotUrl(prediction.plot_url)" alt="Population Plot">
      <img v-if="prediction.monitoring_url" :src="getPlotUrl(prediction.monitoring_url)" alt="Monitoring Plot">
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RegionSelector from '@/components/RegionSelector.vue';
import DepartementSelector from '@/components/DepartementSelector.vue';
import CommuneSelector from '@/components/CommuneSelector.vue';

export default {
  components: {
    RegionSelector,
    DepartementSelector,
    CommuneSelector,
  },
  data() {
    return {
      region: null,
      departement: null,
      commune: null,
      year: null,
      prediction: null,
    };
  },
  computed: {
    ...mapGetters({
      regions: 'region/allRegions',
      departements: 'departement/allDepartements',
      communes: 'commune/allCommunes',
    }),
  },
  methods: {
    ...mapActions({
      fetchRegions: 'region/fetchRegions',
      fetchDepartements: 'departement/fetchDepartements',
      fetchCommunes: 'commune/fetchCommunes',
    }),
    onSelectRegion(region) {
      this.region = region;
      this.departement = null;
      this.commune = null;
      if (region) {
        this.fetchDepartements(region);
      }
    },
    onSelectDepartement(departement) {
      this.departement = departement;
      this.commune = null;
      if (departement) {
        this.fetchCommunes(departement);
      }
    },
    onSelectCommune(commune) {
      this.commune = commune;
    },
    async predict() {
      let url = '';
      if (this.commune) {
        url = `https://flask-app-hf4n2lmciq-ew.a.run.app/predict/commune?code=${this.commune}&year=${this.year}`;
      } else if (this.departement) {
        url = `https://flask-app-hf4n2lmciq-ew.a.run.app/predict/departement?code=${this.departement}&year=${this.year}`;
      } else if (this.region) {
        url = `https://flask-app-hf4n2lmciq-ew.a.run.app/predict/region?code=${this.region}&year=${this.year}`;
      } else {
        alert('Please select a region, departement, or commune.');
        return;
      }

      try {
        const response = await this.$axios.get(url);
        this.prediction = response.data;
      } catch (error) {
        console.error('Error fetching prediction:', error);
      }
    },
    getPlotUrl(plotUrl) {
      return plotUrl;
    },
  },
  mounted() {
    this.fetchRegions();
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
