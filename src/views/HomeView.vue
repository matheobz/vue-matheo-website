<template>

  <img src="../assets/images/logo3.png" class="img-logo" alt="Logo">
    
    <section class="titre">
      <h1 class="lineUp">N'imaginez plus votre site</h1>
      <h1 class="lineUp">Partagez-le</h1>
    </section>
      
    <a class="button-wrapper" href="#contact">
      <div class="button mt-3">Me contacter <span class="fleche">→</span></div>
    </a>

    <div class="arrow-container">
      <a data-scroll href="#full">
          <div class="arrow"></div>
      </a>
    </div>

    
    <section class="fenetre-container">
      <div class="fenetre">


        <nav class="navbar">
          <div class="logo">
              <a href="#">Logo</a>
          </div>
          <ul class="nav-links">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Contact</a></li>
              <li class="icons">
                  <a href="#"><i class="fas fa-search"></i></a>
                  <a href="#"><i class="fas fa-comments"></i></a>
              </li>
          </ul>
      </nav>


      <p class="fenetre-titre">Jaguar<br>Votre voiture<br>À votre ADN</p>

      <div class="hexagon-btn">
        <div class="hexagon">
            <p class="arrow2">></p> <!-- Vous pouvez utiliser une icône ou un caractère pour la flèche -->
        </div>
    </div>

      </div>
    </section>

      <div class="div-prensentation">
        <h2 class="lineUp">We're building the best chat app on Earth</h2>
          <p class="prensentation">
            Chat today is broken. We have 5-10+ different chat apps on our phones, each for a different set of contacts. There's no unified inbox or search. Our inbox is cluttered with one-time codes and spam.
            <br><br>
            So, we're fixing it. Beeper Cloud is a universal chat app. It’s a single app to chat with friends on 15 different chat networks. We’ve added chat superpowers that make it the best chat app on earth.
            <br><br>
            Apple, Facebook and Google control the majority of chat apps right now. For them, chat is just a minor part of their main business. Their chat apps exist primarily to lock people in to their advertising or hardware walled-gardens.
            <br><br>
            Our approach is different. Chat is our only business. We love chat and are 100% dedicated to making it awesome. Read more of our chat manifesto.
          </p>
          <div class="row mt-5">
            <div class="col-2"><img src="images/moi.jpg" alt="Mathéo berrez" class="card-image"></div>
            <div class="card-content col">
              <h3 class="card-name">Mathéo Berrez</h3>
              <p class="card-title">Développeur full stack</p>
            </div>
          </div>
     </div>

    <div class="bg-grey pt-1 pb-1">

      <div class="titre-global-box">More features you’ll love</div>
      <div class="box-des-box">
        <div class="box-column">
          <div class="div-box-1">
            <h4 class="box-title">Open Source Protocol</h4>
            <p class="box-P">Remember this XKCD comic? That’s why we built Beeper Cloud on the open source chat protocol Matrix. Unlike other chat networks, there is no lock-in. You’re free to use open source Matrix clients to connect to Beeper Cloud, or download your data and move to a different Matrix server and continue chatting with your friends on Beeper Cloud.
              Beeper contributes back to the Matrix community. All of our Matrix bridges are open source on our Github. Don't want to pay for Beeper Cloud? Self-host your own instance for free.</p>
          </div>
          <div class="div-box-3">
            <h4 class="box-title">Powerful Desktop App</h4>
            <p class="box-P">Most chat apps treat desktop as a second class citizen. Not us! Our desktop app is fast, fully-featured and full of keyboard shortcuts to help you get through your inbox. Beeper Cloud runs on Windows, Mac OS, Linux and Chrome OS.</p>
          </div>
          <div class="div-box-1">
            <h4 class="box-title">15 Chat Networks - 1 App</h4>
            <p class="box-P">Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...Contenu de la boîte 1...</p>
          </div>
        </div>
        <div class="box-column">
          <div class="div-box-2">
            <h4 class="box-title">Secure Encrypted Chat</h4>
            <p class="box-P">Privacy is a fundamental human right. We will uphold the privacy and security of the data you send and receive on Beeper Cloud. We will never profit by selling your data. Read FAQ for more details.

              All Beeper Cloud chat messages are end-to-end encrypted. Messages sent using Beeper Cloud to other chat networks are re-encrypted if the other network supports encryption (like Signal, WhatsApp and iMessage).</p>
          </div>
          <div class="div-box-4">
            <h4 class="box-title">Our Business Model Is Simple</h4>
            <p class="box-P">We are building the best chat app on Earth. No ads. No siphoning and selling personal data. No BS. We sell an optional paid subscription with premium features. Our business model means that our interests are 100% aligned with our customers.</p>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="footer">
      <br><br><br><br><br><br><br><br><br><br><br><br>
      </div>


</template>

<script>
export default {

}
</script>

<style lang="scss">
.matheo {
color: white;
margin-top: 50px;
margin-left: 16%;
font-size: 30px;
position: relative;
}

.img-logo{
  margin-top: 50px;
  margin-left: 13%;
  position: relative;
  height: 20px;
}


h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 5.5em!important;
  margin-top: 1.2% !important;
  font-weight: 700 !important;
  position: relative;
  z-index: 100;
}

.titre{
  margin-top: 10%;
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
  font-size:2.25rem !important;
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
  font-size: 1.34rem !important;
  margin-bottom: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400 !important;
  margin-top: 3%;
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
  margin-top: 2%;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.button {
  border-radius: 0.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .2);
  padding: 0.75rem 1.5rem 0.85rem;
  font-weight: 700;
  font-size: 1.23rem;
  line-height: 1.5;
  transition: opacity .2s;
}

.button:hover {
  background-color: rgba(255, 255, 255, .4);/* Couleur de fond du bouton au survol */
  
}


.card {
  display: flex;
  background: black !important;
  margin-top: 7%;
}

.card-image {
  border-radius: 50%;
  margin-right: 15px;
  height: 75px;
  width: 75px;

}

.card-content {
  display: flex;
  flex-direction: column;
  margin-left: -5%;
}

.card-name {
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
}

.card-title {
  font-size: 1.2rem;
  color: white;
}

.fleche {
margin-left: 0.2rem;
}

.bg-grey{
  background-color: #25262D !important;
}

.titre-global-box{
  color: white;
  font-size: 3.3rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  margin-top: 2em;
}

.box-title{
  font-size:1.5rem !important;
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


.box-P{
  color: #131b3a !important;
  font-size: 1.4rem !important;
  margin-bottom: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans, sans-serif;font-size: 1rem;
  font-weight: 400 !important;
  margin-top: 3%;
  font-weight: 400 !important;
}

.box-des-box{
  display: flex; /* Maintient les colonnes côte à côte */
  justify-content: space-between; /* Ajoute de l'espace entre les colonnes */
  width: 75%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 3em;
}

.box-column {
  display: flex; /* Active Flexbox */
  flex-direction: column; /* Alignement vertical des enfants */
  width: 48.5%; /* Assure la cohérence avec div-box-1 et div-box-2 */
}

.div-box-1, .div-box-2, .div-box-3, .div-box-4 {
  background-color: white;
  border-radius: 25px;
  padding: 4rem;
  margin-bottom: 6%; /* Ajoute un peu d'espace entre les boîtes dans la même colonne */
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


.scroll {
  text-align: center;
	width: 60px;
	height: 60px;
	border: 2px solid #ffffff;
	border-radius: 50%;
	position: relative;
	animation: down 1.5s infinite;
	-webkit-animation: down 1.5s infinite;
	&::before {
		content: "";
		position: absolute;
		top: 15px;
		left: 18px;
		width: 18px;
		height: 18px;
		border-left: 2px solid #ffffff;
		border-bottom: 2px solid #ffffff;
		transform: rotate(-45deg);
	}
}

</style>