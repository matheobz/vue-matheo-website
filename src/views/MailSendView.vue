<template>
  <OrbBackground/>
  <div class="container">
    <div class="confirmation-box">
      <h1>Merci !</h1>
      <p>Je vous confirme que votre message à bien été prit en compte.</p>
      <router-link to="/" class="home-link">Retourner à l'accueil</router-link>
    </div>
  </div>
</template>

<script>
import OrbBackground from '../components/OrbBackground.vue';

export default {
  components: {
    OrbBackground
  }
}
</script>

<style scoped lang="scss">
.background-orb {
  width: 100%;
  height: 100vh;
  position: absolute;
  margin-top: 0vh!important;
  display: block;

}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: white;
  display: flex;
}

.confirmation-box {
  padding: 30px;
  background-color: #222;
  border-radius: 5px;
  margin: 10% 35%;
  width: 30%;
  position: absolute;
  display: block;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #555;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}


.home-link:hover {
  background-color: #777;
}

h1 {
  font-size:2.35rem !important;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700 !important;
  line-height: 1.5;
  display: inline-block;
  background-image: linear-gradient(90deg, #9c4ce0, #f98e86);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2%;

}

p {
  color: aliceblue;
  margin-bottom: 2%;
}
</style>
