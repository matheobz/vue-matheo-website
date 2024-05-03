<template>
  <div id="sectionPresentation" class="invisible" style="margin-top: -3%"></div>
  <div class="animate-enter container" ref="prensentationRef">
    <h2>Qui suis-je ?</h2>
    <p class="presentation">
      En tant qu'architecte digital freelance, mon travail consiste à propulser
      votre entreprise dans le dynamisme de l'ère numérique. Façonnons ensemble
      des expériences web distinctives, qui mettent en avant vos idées et
      stimulent la croissance de votre activité.
      <br /><br />
      Mon approche est fondée sur la collaboration. Ensemble, plongeons au
      cœur de vos besoins pour forger des solutions web sur mesure, esthétiques
      et fonctionnelles. De l'ébauche à la mise en ligne je vous accompagne, chaque phase est
      méticuleusement orchestrée pour que votre site incarne véritablement
      l'esprit de votre marque.
      <br /><br />
      Je mets à votre disposition l'ensemble de ma créativité et mon
      savoir-faire technique, afin d'élaborer des sites internet réactifs et
      intuitifs. L'objectif est de Vous livrer un site qui capte l'essence de
      votre entreprise mais aussi celle de votre public cible.
      <br /><br />
      Pour toute demande, idée innovante ou pour un simple renseignement n'hesiter a me contacter.
    </p>
    <div class="id">
      <div class="pdp">
        <img
          src="../assets/images/moi.jpg"
          alt="Mathéo berrez"
          class="card-image"
        />
      </div>
      <div class="nom">
        <h1>Mathéo Berrez</h1>
        <p>Développeur</p>
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
        root: null, // utilise le viewport comme zone de clipping
        threshold: 0.1, // l'élément doit être visible à 10% avant de déclencher l'animation
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.$refs.prensentationRef.classList.add("animate-enter-active");
          }
        });
      }, options);

      observer.observe(this.$refs.prensentationRef);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 1em auto 0 auto;
  width: 856px;
  position: relative;
  z-index: 100;
  margin-bottom: 8em;
}

.animate-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s, transform 1s;
}

.animate-enter-active {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  font-size: 2.35rem !important;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700 !important;
  line-height: 1.5;
  display: inline-block;
  background-image: linear-gradient(
    90deg,
    var(--color-fadeText1-color),
    var(--color-fadeText2-color)
  ); //#9c4ce0, #f98e86
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.presentation {
  color: #ffffff;
  font-size: 1.44rem;
  margin-bottom: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans,
    sans-serif;
  font-weight: 400;
  margin-top: 3%;
  line-height: 1.5;
}

.id {
  display: flex;
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
  margin-top: 7%;
}

.id p {
  margin-top: 5%;
  font-size: 1.2rem;
  color: white;
}

@media (max-width: 992px) {
  .container {
    width: 75%;
    margin: 0 auto 120px auto;
  }
  h2 {
    font-size: 2rem !important;
  }

  .presentation {
    font-size: 1.2rem;
    margin: 3% 0 40px 0;
  }
  .id .pdp img {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  .id .nom h1 {
    font-size: 1.25rem;
    margin-top: 6%;
  }

  .id p {
    font-size: 1.125rem;
    margin-top: 6%;
  }
  .id .nom {
    padding-left: 10px;
  }
}

@media (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto 80px auto;
  }
  h2 {
    font-size: 1.5rem !important;
  }

  .presentation {
    font-size: 1.125rem;
    margin: 3% 0 40px 0;
  }

  .id .pdp img {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  .id .nom h1 {
    font-size: 1.25rem;
    margin-top: 6%;
  }

  .id p {
    font-size: 1.125rem;
    margin-top: 6%;
  }
  .id .nom {
    padding-left: 10px;
  }
}

@media (max-width: 510px) {
  .container {
    width: 90%;
    margin: 0 auto 80px auto;
  }
  h2 {
    font-size: 1.7rem !important;
  }

  .presentation {
    font-size: 1.125rem;
    margin: 3% 0 40px 0;
  }

  .id .pdp img {
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
  }

  .id .nom h1 {
    font-size: 1rem;
  }

  .id p {
    font-size: 0.88rem;
    margin-top: 8%;
  }
}
</style>
