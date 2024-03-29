<template>
  <div class="container">
    <div class="navbar">
      <div class="space-left"></div>

      <div class="logo-container">
        <router-link to="/" class="matheo">Mathéo Développer Web</router-link>
      </div>

      <div class="space-middle"></div>

      <div class="nav-links">
        <a
          class="texte-souligne"
          onclick="document.getElementById('sectionPresentation').scrollIntoView({ behavior: 'smooth' });"
          >Qui suis-je ?</a
        >
        <a
          class="texte-souligne"
          onclick="document.getElementById('sectionCompetance').scrollIntoView({ behavior: 'smooth' });"
          >Compétences</a
        >
        <a
          class="texte-souligne"
          onclick="document.getElementById('sectionTechno').scrollIntoView({ behavior: 'smooth' });"
          >Technologies</a
        >
        <a
          class="texte-souligne"
          onclick="document.getElementById('sectionContact').scrollIntoView({ behavior: 'smooth' });"
          >Contact</a
        >
      </div>
      <div class="menu-btn">
        <span class="material-symbols-outlined burger">menu</span>
      </div>

      <div class="space-right"></div>
    </div>

    <div class="titre">
      <h1 class="lineUp">
        N'imaginez plus votre site.
        <span style="white-space: nowrap">Créez-le.</span>
      </h1>
    </div>

    <a class="button-wrapper">
      <div
        class="button mt-3"
        onclick="document.getElementById('sectionContact').scrollIntoView({ behavior: 'smooth' });"
      >
        Me contacter <span class="fleche"> →</span>
      </div>
    </a>

    <div id="accordionSection" class="invisible" style="margin-top: 0.1%"></div>

    <div class="arrow-container">
      <a
        onclick="document.getElementById('accordionSection').scrollIntoView({ behavior: 'smooth' });"
      >
        <div class="arrow"></div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.initMenu();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    initMenu() {
      const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar"); // Sélectionner la navbar

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("menu-active");
    navbar.classList.toggle("navbar-active");
  });
    },
    handleScroll() {
      const arrow = document.querySelector(".arrow-container");
      if (window.scrollY > 550) {
        // Ajustez ce seuil à la valeur souhaitée
        arrow.classList.add("fade-out");
      } else {
        arrow.classList.remove("fade-out");
      }
    },
  },
};
</script>


<style scoped lang="scss">
.texte-souligne {
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-bottom: 8px; /* Augmente l'espace sous le texte pour permettre un soulignement plus bas */
}

.texte-souligne::after {
  content: "";
  position: absolute;
  bottom: -0px; /* Ajuste cette valeur pour déplacer le soulignement plus bas */
  width: 0;
  height: 1px;
  background-color: white;
  transition: width 0.3s ease, background-color 0.3s ease, left 0.3s ease;
  left: 0;
}

.texte-souligne:hover::after {
  width: 100%;
  left: 0;
  background-color: var(--color-secondary-color);
}

.navbar {
  padding-top: 2.5%;
  display: flex;
}

.navbar .space-left {
  flex: 1;
}

.navbar.logo-container {
  flex: 1;
  display: flex;
}

.navbar .logo-container .matheo {
  color: white;
  transition: color 0.5s ease;
}

.navbar .logo-container .matheo:hover {
  color: var(--color-secondary-color);
}

.navbar .logo-container a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
}

.navbar .logo-container img {
  height: 20px;
}

.navbar .space-middle {
  flex: 1;
}

.navbar .nav-links {
  display: flex;
  justify-content: space-around;
  align-items: right;
  width: 635px;
}

.navbar .nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
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
  font-size: 5rem;
  font-weight: 700;
  position: relative;
  line-height: 1.4;
}

.titre {
  margin: 19vh auto 0;
  width: 70vw;
}

.arrow {
  box-sizing: border-box;
  height: 20px;
  width: 20px;
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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem 0.85rem;
  font-weight: 700;
  font-size: 1.23rem;
  line-height: 1.5;
  transition: 0.2s;
}

.fleche {
  margin-left: 5px;
}

.button:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.4
  ); /* Couleur de fond du bouton au survol */
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

// RESPONSIVE

@media (max-width: 992px) {
  .nav-links {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    transform: translateY(-130vw);
    transition: transform .3s ease-in-out;
    z-index: 10;
    border-radius: 10px;
  }

  .navbar-active {
  background-color: black; // Définit le fond en noir
  z-index: 11; // Assurez-vous que cette valeur est supérieure à celle du menu déroulant
  }

  .menu-active {
    transform: translateX(0%);
  }


  .navbar .space-left {
    flex: 0.5;
  }
  .navbar .space-middle {
    flex: 4;
  }
  .navbar .space-right {
    flex: 0.5;
  }

  h1 {
    font-size: 4.5em;
    margin-bottom: 5vh;
  }

  .titre {
    margin: 17vh auto 0;
    width: 85vw;
  }

  .button {
    font-size: 1rem;
  }

  .arrow {
    height: 18px;
    width: 18px;
  }

  
  .menu-btn {
    display: flex;
  }

  .burger {
    color: white;
    font-size: 2em;
    cursor: pointer;
    transition: 0.5s;
  }

  .burger:hover {
    color: var(--color-secondary-color);
  }

  .menu-btn__burger {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease-in-out;
  }

  .nav-links a {
    font-size: 20px;
  }
  
  .container,
  .navbar {
    position: relative; /* Ajoutez cette ligne si elle manque */
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 3em;
    margin-bottom: 4vh;
  }

  .arrow {
    height: 14px;
    width: 14px;
  }

  .nav-links {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    transform: translateY(-180vw);
    transition: transform .3s ease-in-out;
    z-index: 10;
    border-radius: 10px;
  }

  .menu-btn {
    display: flex;
  }

  .burger {
    color: white;
    font-size: 2em;
    cursor: pointer;
    transition: 0.5s;
  }

  .burger:hover {
    color: var(--color-secondary-color);
  }

  .menu-btn__burger {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease-in-out;
  }

  .nav-links a {
    font-size: 20px;
  }
  .menu-active {
    transform: translateX(0%);
  }
  .container,
  .navbar {
    position: relative; /* Ajoutez cette ligne si elle manque */
  }
}

@media (max-width: 510px) {
  h1 {
    font-size: 2.2em;
    margin-bottom: 3.5vh;
  }

  .button {
    font-size: 1em;
  }

  .arrow {
    height: 12px;
    width: 12px;
    margin-top: 3vh;
  }

  .navbar .logo-container a {
    font-size: 20px;
    line-height: 1.6;
  }

  .nav-links {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    transform: translateY(-300vw);
    transition: transform .3s ease-in-out;
    z-index: 10;
    border-radius: 10px;
  }
  .menu-btn {
    display: flex;
  }

  .burger {
    color: white;
    font-size: 2em;
    cursor: pointer;
    transition: 0.5s;
  }

  .burger:hover {
    color: var(--color-secondary-color);
  }

  .menu-btn__burger {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease-in-out;
  }

  .nav-links a {
    font-size: 20px;
  }
  .menu-active {
    transform: translateX(0%);
  }
  .container,
  .navbar {
    position: relative; /* Ajoutez cette ligne si elle manque */
  }
}
</style>