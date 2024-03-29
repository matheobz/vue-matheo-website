<template>
  <div class="container" id="sectionContact">
    <div class="grid">
      <div class="column">
        <h1>Mes coordonnées</h1>
        <p>
          <span class="material-symbols-outlined icon">mail</span>
          matheoberrez@gmail.com
        </p>
        <p>
          <span class="material-symbols-outlined icon">person_pin_circle</span>
          Nantes
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86684.44356818538!2d-1.6427346470508446!3d47.23831976773072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8aead%3A0x40d37521e0ded30!2sNantes!5e0!3m2!1sfr!2sfr!4v1710796509181!5m2!1sfr!2sfr"
          class="map"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="column">
        <h1>En 2 clicks</h1>
        <p class="text">Plus rapide pour vous, pareil pour moi :)</p>
        <div class="form">
          <form
            action="https://formsubmit.co/4dd6801f8e459ca1d130c3f8ec9c9e88"
            method="POST"
          >
            <input type="text" name="name" required placeholder="Name" />
            <input type="email" name="email" required placeholder="Email" />
            <input type="text" name="subject" required placeholder="Sujet" />
            <textarea name="message" required placeholder="Message"></textarea>
            <div class="button-container">
              <button type="submit">
                <span v-if="!isLoading">Envoyer</span>
                <span v-if="isLoading" class="loader"></span>
                <svg
                  viewBox="-5 -5 110 110"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"
                  />
                </svg>
              </button>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:8080/mailsend"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLoading: false, // Contrôle l'état de l'animation de chargement
    };
  },
  mounted() {
    // Attache un écouteur d'événements au formulaire lors du montage du composant
    this.attachFormSubmitListener();
  },
  methods: {
    attachFormSubmitListener() {
      // Trouve le formulaire dans le template du composant
      const form = this.$el.querySelector("form");

      if (form) {
        // Attache un écouteur d'événements 'submit' au formulaire
        form.addEventListener("submit", this.handleFormSubmit);
      }
    },
    handleFormSubmit() {
      // Active l'animation de chargement
      this.isLoading = true;

      // Aucun appel à `event.preventDefault()` ici car nous voulons que le formulaire se soumette normalement
      // L'animation de chargement restera active jusqu'à ce que la page soit redirigée ou rechargée
    },
  },
  beforeUnmount() {
    // Nettoie l'écouteur d'événements lorsque le composant est sur le point d'être détruit
    const form = this.$el.querySelector("form");
    if (form) {
      form.removeEventListener("submit", this.handleFormSubmit);
    }
  },
};
</script>


<style scoped lang="scss">
.container {
  background-position: center;
  width: 100%;

  background: linear-gradient(
    145deg,
    var(--color-bgFade2-color),
    var(--color-bgFade1-color)
  );

  box-sizing: border-box;
  min-height: 90vh;
}

.loader {
  width: 20px;
  height: 20px;
  border: 4px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon {
  font-size: 1.6rem;
  position: relative;
  top: 5px;
  padding: 0 1% 0 0px;
}

p {
  color: white;
  font-size: 1.4rem;
  margin: 0 0 3% 0;
}

.text {
  color: #ffffffe1;
  font-size: 1.2rem;
  margin: 0 0 10% 0;
  line-height: 1.2;
}

.form {
  width: 60%;
  height: 100%;
}

.map {
  min-height: 390px;
  min-width: 400px;
  width: 70%;
  border-radius: 1rem;
  margin: 0 0 5% 0;
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
}

.form form {
  padding: 0;
}

.form input,
.form textarea {
  box-sizing: border-box;
  max-width: 468px;
  width: 100%;
  padding: 1rem;
  border: 0.08rem solid white;
  border-radius: 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-family: "Mona Sans", "Mona Sans Fallback", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.form input:not(:first-child),
.form textarea,
.form button {
  margin-top: 1rem;
}

.form textarea {
  height: 11rem;
  resize: none;
}

.grid {
  display: flex;
  padding-bottom:50px ;
}

.grid .column {
  width: 100%;
  padding: 2rem 2% 0rem 7%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
}

.grid .column h1 {
  color: white;
  font: 500 1.8rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.form button {
  background-color: var(--color-primary-color);
  padding: 1rem 2rem;
  border: none;
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  line-height: 1;
  padding: 1em 1.5em;
  position: relative;
  height: 50px;
  width: 100px;
}

button:hover {
  filter: brightness(1.1);
  border-radius: 0;
}

button:active {
  filter: brightness(0.9);
}

button > span {
  display: block;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  z-index: 1;
}

button:hover > span {
  transform: scale(1.05);
}

button:active > span {
  transform: scale(0.95);
}

button > svg {
  fill: var(--color-primary-color);
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  border-radius: 1rem;
}

button > svg > path {
  transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

button:hover > svg > path {
  d: path(
    "M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0"
  );
}

button:active > svg > path {
  d: path(
    "M0,0 C30,10 70,10 100,0 C95,30 95,70 100,100 C70,90 30,90 0,100 C5,70 5,30 0,0"
  );
}

@media screen and (max-width: 992px) {
  .grid {
    flex-direction: column;
    align-items: center;
  }

  .grid .column {
    padding: 2rem 1% 0rem; /* Ajustement des padding pour une meilleure vue sur petits écrans */
    width: 80%; /* Ajustement de la largeur pour occuper plus d'espace */
  }
}

@media screen and (max-width: 768px) {
  p, .text {
    font-size: 1.2rem; /* Réduction de la taille de police */
  }

  .form input, .form textarea {
    padding: 0.8rem; /* Ajustement du padding des champs de formulaire */
  }

  .grid .column h1 {
    font-size: 1.6rem; /* Réduction de la taille de police pour les titres */
  }

  .map, .form {
    width: 100%; /* Utilisation de toute la largeur disponible */
  }
}

@media screen and (max-width: 510px) {
  p, .text {
    font-size: 1rem; /* Réduction supplémentaire de la taille de police */
  }

  .grid .column {
    padding: 2rem 5%; /* Ajustement du padding pour un meilleur espacement */
  }

  .form button {
    width: 100%; /* Bouton prend toute la largeur disponible */
    padding: 0.8rem; /* Ajustement du padding pour un look plus adapté */
  }
}
</style>