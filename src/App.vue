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
}

#app {
  margin: 0;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: darkblue;
}
</style>
