<template>
  <div class="container" id="sectionCompetance">
      <h1>Mes compétences</h1>
      <div class="boxes">
        <div class="column">
          <div class="box">
            <h4>Open Source Protocol</h4>
            <p>Remember this XKCD comic? That’s why we built Beeper Cloud on the open source chat protocol Matrix. Unlike other chat networks, there is no lock-in. You’re free to use open source Matrix clients to connect to Beeper Cloud, or download your data and move to a different Matrix server and continue chatting with your friends on Beeper Cloud.
              Beeper contributes back to the Matrix community. All of our Matrix bridges are open source on our Github. Don't want to pay for Beeper Cloud? Self-host your own instance for free.</p>
          </div>
          <div class="box">
            <h4>Powerful Desktop App</h4>
            <p>Most chat apps treat desktop as a second class citizen. Not us! Our desktop app is fast, fully-featured and full of keyboard shortcuts to help you get through your inbox. Beeper Cloud runs on Windows, Mac OS, Linux and Chrome OS.</p>
          </div>
          <div class="box">
            <h4>15 Chat Networks - 1 App</h4>
            <p>Contenu de la boîte 1...</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h4>Secure Encrypted Chat</h4>
            <p>Privacy is a fundamental human right...</p>
          </div>
          <div class="box-dark">
            <h4>Dark Mode</h4>
            <p>Toujours un plus pour le conford utilisateur</p>
          </div>
          <div class="box">
            <h4>Our Business Model Is Simple</h4>
            <p>We are building the best chat app on Earth. No ads...</p>
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
        threshold: 0.3
      };

      // Sélectionne à la fois les éléments .box et .box-dark
      const boxes = document.querySelectorAll('.box, .box-dark');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-enter-active');
          }
        });
      }, options);

      boxes.forEach(box => {
        observer.observe(box);
      });
    }
  }
}


</script>


<style scoped lang="scss">

/* Base layout styles */
.container {
  background-color: #2d2d38;
  // background: linear-gradient(145deg, var(--color-bgFade1-color),var(--color-bgFade2-color));/*145*/
  padding: 6% 2% 0;
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
  width: 75%;
  margin: 0 auto;
  padding-top: 3em;
}

.boxes .column {
  width: 48.5%;
  display: flex;
  flex-direction: column;
}

/* Shared box styles */
.boxes .column .box, .boxes .column .box-dark {
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
  color: rgb(255, 255, 255, .6); /* Apply color directly to .box-dark for all child text */
}

/* Typography & color */
.boxes .column .box h4, .boxes .column .box-dark h4 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  display: inline-block;
  color: transparent; /* For gradient text, fallback color */
  background-image: linear-gradient(90deg, var(--color-fadeText1-color), var(--color-fadeText2-color));
  -webkit-background-clip: text;
}

.boxes .column .box-dark h4 {
  color: #FFFFFF; /* Override for .box-dark */
}

.boxes .column .box p, .boxes .column .box-dark p {
  font-size: 1.36rem;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 3%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans;
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

</style>