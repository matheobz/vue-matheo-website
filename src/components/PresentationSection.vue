<template>
  <div id="sectionPresentation"  class="invisible" style="margin-top:-3%"></div>
  <div class="animate-enter container" ref="prensentationRef">
        <h2 >Je me présente, Mathéo et vous ?</h2>
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