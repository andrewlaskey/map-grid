<template>
  <div class="grid-wrap">
    <grid />
  </div>
  <info-display />
</template>

<script>
import Grid from './components/Grid.vue'
import InfoDisplay from './components/InfoDisplay.vue'

export default {
  name: 'App',
  components: {
    Grid,
    InfoDisplay,
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #454545;
}

#app {
  margin: 0;
  padding: 5rem;
  background: #454545;
}

.grid-wrap {
  perspective: 300px;
}
</style>
