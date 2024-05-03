<template>
  <div class="container" id="sectionCompetance">
    <h1>Mes compétences</h1>
    <div class="boxes">
      <div class="column">
        <div class="box">
          <h4>Responsive Design</h4>
          <p>Votre site internet sur tout les écrans !</p>
        </div>
        <div class="box">
          <h4>Implémentation technique</h4>
          <p>
            Je m'engage à appliquer une approche personnalisée pour chaque
            projet, me permettant de développer des solutions qui correspondent
            à vos besoins uniques, que ce soit en termes d'esthétique ou de
            fonctionnalité. En me concentrant sur l'acquisition de compétences
            en développement front-end et back-end et en explorant les dernières
            technologies, je suis prêt à me lancer dans tout type de projet. Mon
            objectif est de transformer vos idées en réalités digitales qui non
            seulement répondent à vos attentes, mais vous surprennent
            agréablement par leur qualité et leur innovation.
          </p>
        </div>
        <div class="box">
          <h4>Apprentissage Continu</h4>
          <p>
            Pour moi, il s'agit moins de savoir tout sur tout que de rester
            curieux et ouvert aux nouvelles idées et technologies. Je m'efforce
            d'apprendre quelque chose de nouveau chaque jour, pour que mes
            projets ne soient pas juste à la pointe, mais aussi réfléchis et
            innovants.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h4>Optimisation de Performance</h4>
          <p>
            L'optimisation de la performance est au cœur de ma démarche de
            développement. Utilisant Vue.js et Wordpress pour construire mes
            sites, je m'assure non seulement que vos pages chargent rapidement,
            mais aussi qu'elles offrent une expérience utilisateur fluide et
            réactive sur tous les appareils. Mon objectif ? Faire en sorte que
            votre site soit non seulement beau et fonctionnel, mais également
            performant, pour que vos utilisateurs et les moteurs de recherche
            vous placent en tête de liste.
          </p>
        </div>
        <div class="box-dark">
          <h4>Dark Mode</h4>
          <p>Toujours un plus pour le conford utilisateur</p>
        </div>
        <div class="box">
          <h4>Communication</h4>
          <p>
            Une communication claire et directe est essentielle pour transformer
            une idée en un projet réussi. C'est pourquoi je mets un point
            d'honneur à établir un dialogue ouvert et honnête avec chacun de mes
            clients. En me concentrant sur l'écoute de vos besoins et en
            partageant des mises à jour régulières, je m'assure que nous sommes
            toujours sur la même longueur d'onde.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        threshold: 0.3,
      };

      // Sélectionne à la fois les éléments .box et .box-dark
      const boxes = document.querySelectorAll(".box, .box-dark");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-enter-active");
          }
        });
      }, options);

      boxes.forEach((box) => {
        observer.observe(box);
      });
    },
  },
};
</script>


<style scoped lang="scss">
/* Base layout styles */
.container {
  background-color: #2d2d38;
  // background: linear-gradient(145deg, var(--color-bgFade1-color),var(--color-bgFade2-color));/*145*/
  padding: 6% 2% 80px;
}

h1 {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}

/* Boxes layout */
.boxes {
  display: flex;
  justify-content: space-between;
  max-width: 1370px;
  margin: 0 auto;
  padding-top: 3em;
}

.boxes .column {
  width: 48.5%;
  display: flex;
  flex-direction: column;
}

/* Shared box styles */
.boxes .column .box,
.boxes .column .box-dark {
  border-radius: 25px;
  padding: 4rem;
  margin-bottom: 6%;
  opacity: 0; /* Set initial opacity for animation */
}

/* Individual box styles */
.boxes .column .box {
  background-color: white;
}

.boxes .column .box-dark {
  background-color: black;
  color: rgb(
    255,
    255,
    255,
    0.6
  ); /* Apply color directly to .box-dark for all child text */
}

/* Typography & color */
.boxes .column .box h4,
.boxes .column .box-dark h4 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  display: inline-block;
  color: transparent; /* For gradient text, fallback color */
  background-image: linear-gradient(
    90deg,
    var(--color-fadeText1-color),
    var(--color-fadeText2-color)
  );
  -webkit-background-clip: text;
}

.boxes .column .box-dark h4 {
  color: #ffffff; /* Override for .box-dark */
}

.boxes .column .box p,
.boxes .column .box-dark p {
  font-size: 1.36rem;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 3%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans;
}

/* Animation */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-enter-active {
  animation: slideUp 0.5s ease-out forwards;
}
@media (max-width: 992px) {
  .container {
    padding: 6% 4% 80px;
  }

  h1 {
    font-size: 3rem;
    padding-top: 1rem;
  }

  .boxes {
    padding-top: 2rem;
  }

  .boxes .column .box p {
    font-size: 1.2rem;
  }

  .boxes .column .box {
    padding: 2rem;
    margin: 10px;
  }

  h4 {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .boxes {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .boxes .column {
    width: 100%;
  }
  .boxes .column .box,
  .boxes .column .box-dark {
    margin: 1rem 0;
    padding: 2rem;
  }

  .boxes .column .box p {
    font-size: 1.125rem;
  }

  h4 {
    font-size: 1.5rem;
  }
}
@media (max-width: 510px) {
  .boxes .column .box h4 {
    font-size: 1.25rem;
  }
  h1 {
    font-size: 2rem;
  }

  .boxes {
    padding-top: 1rem;
  }
}
</style>