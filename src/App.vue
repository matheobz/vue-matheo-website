<template>


  <HomeView/>
  <FenetreSection/>
  
</template>

<script>

import FenetreSection from './components/FenetreSection.vue';
import HomeView from './views/HomeView.vue';

export default {
  components: {
    HomeView,
    FenetreSection
  }
}
</script>

<style>
@import url('assets/styles/global.css');
@import '~normalize.css/normalize.css';

</style>
