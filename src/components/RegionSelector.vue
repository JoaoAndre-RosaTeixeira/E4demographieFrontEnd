<template>
  <div>
    <label for="region">Select a Region:</label>
    <select id="region" @change="onSelectRegion($event)">
      <option value="">Select a Region</option>
      <option v-for="region in regions" :key="region.code" :value="region.code">{{ region.nom }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'RegionSelector',
  props: {
    regions: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelectRegion(event) {
      this.$emit('region-selected', event.target.value);
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
