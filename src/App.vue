<template>

  <OrbBackground/>
  <HomeView/>
  
</template>

<script>
import OrbBackground from './components/OrbBackground.vue';
import HomeView from './views/HomeView.vue';

export default {
  components: {
    OrbBackground,
    HomeView
  }
}
</script>

<style>
@import url('assets/styles/global.css');
@import '~normalize.css/normalize.css';

</style>
