<template>

  <OrbBackground/>
  
</template>

<script>
import OrbBackground from './components/OrbBackground.vue'

export default {
  name: 'App',
  components: {
    OrbBackground
  }
}
</script>

<style>
@import url('assets/styles/global.css');
@import url('assets/styles/fenetre.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
