<template>
  <div id="sectionPresentation"  class="invisible" style="margin-top:-3%"></div>
  <div class="animate-enter container" ref="prensentationRef">
        <h2 >Je me présente, Mathéo et vous ?</h2>
          <p class="prensentation">
            Je suis un développeur, basé à Nantes,  avec un parcours riche et diversifié qui m'a conduit à maîtriser les nuances de l'informatique et, plus précisément, du développement sur internet.
             <br><br>

            Agé de 21 ans, je possède un BTS SIO et suis actuellement une Licences en 3eme années post bac. 
            C'est donc de mon temps libre et par passion que je créer des sites internets afin de m'épanouir et m'enrichire de nouvelle compétances proffessionels.
           
            <br><br>

Agé de 21 ans, je possède un BTS SIO et suis actuellement une Licences en 3eme années post bac. 
            C'est donc de mon temps libre et par passion que je créer des sites internets afin de m'épanouir et m'enrichire de nouvelle compétances proffessionels.
           
            

            <br><br>
            <b>Votre satisfaction est ma priorité.</b>  Je m'engage à respecter les délais, à assurer une communication claire et à fournir un support fiable après la mise en ligne.
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
        threshold: 0.1 // l'élément doit être visible à 10% avant de déclencher l'animation
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.$refs.prensentationRef.classList.add('animate-enter-active');
          }
        });
      }, options);

      observer.observe(this.$refs.prensentationRef);
    }
  }
}
</script>

<style scoped lang="scss">

.animate-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s, transform 1s;
}

.animate-enter-active {
  opacity: 1;
  transform: translateY(0);
}

.container {
  margin: 2em auto 0 auto;
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
  background-image: linear-gradient(90deg, var(--color-fadeText1-color), var(--color-fadeText2-color));//#9c4ce0, #f98e86
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
  margin-top: 1%;
}

.id p {
  margin-top: 5%;
  font-size: 1.2rem;
  color: white;
}

</style>