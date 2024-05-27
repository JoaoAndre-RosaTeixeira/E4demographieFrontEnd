<template>
  <div class="prediction-form">
    <RegionSelector :regions="regions" @region-selected="onSelectRegion" />
    <DepartementSelector v-if="region" :departements="departements" @departement-selected="onSelectDepartement" />
    <CommuneSelector v-if="departement" :communes="communes" @commune-selected="onSelectCommune" />
    <div>
      <label for="year">Year:</label>
      <input v-model="year" type="number" id="year" name="year">
    </div>
    <button @click="predict">Predict</button>
    <div v-if="prediction">
      <PredictionResult :result="prediction" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RegionSelector from '@/components/RegionSelector.vue';
import DepartementSelector from '@/components/DepartementSelector.vue';
import CommuneSelector from '@/components/CommuneSelector.vue';
import PredictionResult from '@/components/PredictionResult.vue';

export default {
  components: {
    RegionSelector,
    DepartementSelector,
    CommuneSelector,
    PredictionResult,
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
  },
  mounted() {
    this.fetchRegions();
  },
};
</script>

<style scoped>
</style>
