<template>
  <div>
    <label for="commune">Select a Commune:</label>
    <select id="commune" @change="onSelectCommune($event)">
      <option value="">Select a Commune</option>
      <option v-for="commune in communes" :key="commune.code" :value="commune.code">{{ commune.nom }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CommuneSelector',
  props: {
    communes: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelectCommune(event) {
      this.$emit('commune-selected', event.target.value);
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
