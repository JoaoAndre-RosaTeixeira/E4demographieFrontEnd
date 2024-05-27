<template>
  <div>
    <label for="departement">Select a Departement:</label>
    <select id="departement" @change="onSelectDepartement($event)">
      <option value="">Select a Departement</option>
      <option v-for="departement in departements" :key="departement.code" :value="departement.code">{{ departement.nom }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DepartementSelector',
  props: {
    departements: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelectDepartement(event) {
      this.$emit('departement-selected', event.target.value);
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
