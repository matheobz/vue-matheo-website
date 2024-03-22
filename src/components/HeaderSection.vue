<template>
<div class="container">
  <div class="navbar">
    <div class="space-left"></div> <!-- Espace à gauche -->
    <div class="logo-container">
      <router-link to="/">Mathéo Développer Web</router-link>

    <!-- <img src="../assets/images/m-blanc.png" alt="Logo" class="logo"> -->
    <!-- <img src="../assets/images/logo3.png" class="img-logo" alt="Logo"> -->
    
    </div>
    <div class="space-middle"></div> <!-- Espace au milieu -->
    <div class="nav-links">
      <a class="texte-souligne" onclick="document.getElementById('sectionPresentation').scrollIntoView({ behavior: 'smooth' });">Qui suis-je ?</a>
      <a class="texte-souligne" onclick="document.getElementById('sectionCompetance').scrollIntoView({ behavior: 'smooth' });">Compétences</a>
      <a class="texte-souligne" onclick="document.getElementById('sectionTechno').scrollIntoView({ behavior: 'smooth' });">Technologies</a>
      <a class="texte-souligne" onclick="document.getElementById('sectionContact').scrollIntoView({ behavior: 'smooth' });">Contact</a>
    </div>
    <div class="space-right"></div> <!-- Espace à droite -->
  </div>


    <section class="titre">
      <h1 class="lineUp">N'imaginez plus votre site <br>Partagez-le</h1>
    </section>
      
    <a class="button-wrapper" >
      <div class="button mt-3" onclick="document.getElementById('sectionContact').scrollIntoView({ behavior: 'smooth' });">Me contacter <span class="fleche"> →</span></div>
    </a>

    <div id="accordionSection"  class="invisible" style="margin-top:.1%;"></div>
    <div class="arrow-container">
      <a onclick="document.getElementById('accordionSection').scrollIntoView({ behavior: 'smooth' });">
          <div class="arrow"></div>
      </a>
    </div>
    </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const arrow = document.querySelector('.arrow-container');
      if (window.scrollY > 550) { // Ajustez ce seuil à la valeur souhaitée
        arrow.classList.add('fade-out');
      } else {
        arrow.classList.remove('fade-out');
      }
    }
  }
}
</script>


<style scoped lang="scss">

.fleche{
  margin-left: 5px;
}

.texte-souligne {
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-bottom: 8px; /* Augmente l'espace sous le texte pour permettre un soulignement plus bas */
}

.texte-souligne::after {
  content: '';
  position: absolute;
  bottom: -0px; /* Ajuste cette valeur pour déplacer le soulignement plus bas */
  width: 0;
  height: 1px; 
  background-color: white; 
  transition: width 0.3s ease, background-color 0.3s ease,   left 0.3s ease;
  left: 0;
}

.texte-souligne:hover::after {
  width: 100%;
  left:0;
  background-color: var(--color-secondary-color);
}

.navbar {
    padding-top: 2.5%;
    display: flex;

}


.navbar .space-left {
    flex: 1;
}


.navbar .logo-container {
    flex: 1;
    display: flex;

}

.navbar .logo-container .logo {
    height: 80px;
}

.navbar .logo-container a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-weight:700;
}

.navbar .logo-container img {
    height: 20px;
}

.navbar .space-middle {
    flex: 1;
}

.navbar .nav-links {
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: right;
}

.navbar .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight:500;
}

.navbar .nav-links a:hover {
    color: var(--color-secondary-color);
}

.navbar .space-right {
    flex: 1;
}


h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 5em;
  font-weight: 700;
  position: relative;
  margin-bottom: 0;
  line-height: 1.3;
}

.titre{
  margin-top: 9%;
}



.arrow {
  box-sizing: border-box;
  height: 1vw;
  width: 1vw;
  border-style: solid;
  border-color: white;
  border-width: 0px 1px 1px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
}

.arrow:hover {
  border-bottom-width: 4px;
  border-right-width: 4px;
  cursor: pointer;
}

.arrow-container {
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}


.button-wrapper {
  margin-top: 4%;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.button {
  border-radius: 0.5rem;
  color: white  ;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  background-color: rgb(255, 255, 255, .2);
  padding: 0.75rem 1.5rem 0.85rem;
  font-weight: 700;
  font-size: 1.23rem;
  line-height: 1.5;
  transition: .2s;
}

.button:hover {
  background-color: rgba(255, 255, 255, .4);/* Couleur de fond du bouton au survol */
  
}



.lineUp {
  animation: 2s anim-lineUp ease-out;
}

@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

</style>