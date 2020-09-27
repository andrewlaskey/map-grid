<template>
  <grid />
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  name: 'App',
  components: {
    Grid,
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
  overflow: scroll;
  background: #454545;
  perspective: 300px;
}
</style>
