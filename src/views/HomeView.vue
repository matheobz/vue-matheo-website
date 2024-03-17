<template>

  <OrbBackground/>

<div class="navbar">
  <div class="space-left"></div> <!-- Espace à gauche -->
  <div class="logo-container">
    <router-link to="/mailsend">Mathéo's Website</router-link>

  <!-- <img src="../assets/images/m-blanc.png" alt="Logo" class="logo"> -->
   <!-- <img src="../assets/images/logo3.png" class="img-logo" alt="Logo"> -->
   
  </div>
  <div class="space-middle"></div> <!-- Espace au milieu -->
  <div class="nav-links">
    <a href="#home" class="texte-souligne">Qui suis-je ?</a>
    <a href="#news" class="texte-souligne">Compétences</a>
    <a href="#contact" class="texte-souligne">Technologies</a>
    <a href="#contact" class="texte-souligne">Contact</a>
  </div>
  <div class="space-right"></div> <!-- Espace à droite -->
</div>

  
    
    <section class="titre">
      <h1 class="lineUp">N'imaginez plus votre site <br>Partagez-le</h1>
    </section>
      
    <a class="button-wrapper" href="#contact">
      <div class="button mt-3">Me contacter <span class="fleche">→</span></div>
    </a>

    <div class="arrow-container">
      <a href="#full">
          <div class="arrow"></div>
      </a>
    </div>

      <!-- <FenetreSection/> -->


      <AccordionSection/>

      <div class="div-prensentation">
        <h2>Je me présente, Mathéo, développeur web :)</h2>
          <p class="prensentation">
            Chat today is broken. We have 5-10+ different chat apps on our phones, each for a different set of contacts. There's no unified inbox or search. Our inbox is cluttered with one-time codes and spam.
            <br><br>
            So, we're fixing it. Beeper Cloud is a universal chat app. It’s a single app to chat with friends on 15 different chat networks. We’ve added chat superpowers that make it the best chat app on earth.
            <br><br>
            Apple, Facebook and Google control the majority of chat apps right now. For them, chat is just a minor part of their main business. Their chat apps exist primarily to lock people in to their advertising or hardware walled-gardens.
            <br><br>
            Our approach is different. Chat is our only business. We love chat and are 100% dedicated to making it awesome. Read more of our chat manifesto.
          </p>
          <div class="id">
            <div class="pdp">
              <img src="../assets/images/moi.jpg" alt="Mathéo berrez" class="card-image">
            </div>
            <div class="nom">
              <h1>Mathéo Berrez</h1>
              <p>Développeur</p>
            </div>
          </div>
     </div>

<CardsSection/>
  

<TechnoSection/>

<ContactSection/>

    <hr>



    <div class="footer">
      <br><br><br><br><br><br><br><br><br><br><br><br>
      </div>

</template>

<script>
// import FenetreSection from '../components/FenetreSection.vue';
import OrbBackground from '../components/OrbBackground.vue';
import TechnoSection from '../components/TechnoSection.vue';
import ContactSection from '../components/ContactSection.vue';
import CardsSection from '../components/CardsSection.vue';
import AccordionSection from '../components/AccordionSection.vue';

export default {
  components: {
    OrbBackground,
    // FenetreSection,
    CardsSection,
    TechnoSection,
    ContactSection,
    AccordionSection
  }
}

</script>

<style scoped lang="scss">

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
  background-color: #a94eff;
}

.navbar {
  margin-top: 2%;
  display: flex;
  padding: 10px 0;
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
    color: #a94eff;
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

.div-prensentation{
  margin-top: 6em;
  margin-left: auto; 
  margin-right: auto;
  width: 45%;
  position: relative;
  z-index: 100;
  margin-bottom: 8em;
}

h2 {
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

}

.prensentation{
  color: #ffffff;
  font-size: 1.44rem;
  margin-bottom: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans, sans-serif;
  font-weight: 400;
  margin-top: 3%;
  line-height: 1.5;
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
}

.arrow-container {
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
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


.id {
  display: flex;
  background: black !important;
  margin-top: 7%;
}

.id .pdp {
  border-radius: 50%;
  height: 75px;
  width: 75px;
}

.id .pdp img {
  border-radius: 50%;
  height: 75px;
  width: 75px;
}

.id .nom {
  padding-left: 15px;
  display: flex;
  flex-direction: column;
}

.id .nom h1 {
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  margin-top: 1%;
}

.id p {
  margin-top: 5%;
  font-size: 1.2rem;
  color: white;
}

hr {
  height: 1px !important; /* Définit la hauteur de votre hr */
  background-color: white !important; /* Définit la couleur de fond du hr */
  opacity: 1 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.footer{
  background-color: #25262D !important;
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