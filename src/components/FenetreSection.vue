<template>

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



        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.fenetre-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 4%;
}

.fenetre{
  border-radius: 25px;

  width: 75vw;
  height: 87vh;
  
  background-image: url("../assets/images/img-theme-5.jpg") !important;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden; /* Empêche le contenu de déborder */

  flex-direction: column; /* Stack les éléments verticalement */
  justify-content: center; /* Centre horizontalement */
  display: flex;


}



.navbar {
  background-color: black;
  opacity: .60;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  height: 7vh;
}

.navbar .logo a {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

.navbar ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  margin-left: 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.navbar ul li.icons a {
  font-size: 20px;
  margin-left: 10px;
}

/* Ajout d'un peu d'interaction au survol */
.navbar ul li a:hover,
.navbar ul li.icons a:hover {
  color: grey;
}

.fenetre-titre{
  font-size: 5em;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans, sans-serif;
  
  align-items: center; /* Centrer le contenu verticalement dans .fenetre */
  display: grid;
  text-align: left;
  font-weight: 700;
  margin-top: auto;
  margin-bottom: auto;

  box-sizing: border-box; /* Assure que padding ne fait pas déborder le titre */
  padding: 3vw; /* Ajustez selon le besoin */

  

}

</style>