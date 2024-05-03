<template>
  <div class="container" id="sectionTechno">
    <h1>Compétences maîtrisées</h1>
    <h2></h2>

    <div class="grid">
      <div class="logo-container">
        <img
          class="logo logo-container"
          src="../assets/images/logos/html.png"
          alt="html"
        />
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/images/logos/css.png" alt="css" />
      </div>
      <div class="logo-container">
        <img
          class="logo"
          src="../assets/images/logos/js.png"
          alt="javascript"
        />
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/images/logos/java.png" alt="java" />
      </div>
      <div class="logo-container">
        <img
          class="logo flutter"
          src="../assets/images/logos/flutter.png"
          alt="flutter"
        />
      </div>
      <div class="logo-container">
        <img
          class="logo"
          src="../assets/images/logos/ps.png"
          alt="Photo Shop"
        />
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/images/logos/vue.png" alt="vue" />
      </div>
      <div class="logo-container">
        <img
          class="logo"
          src="../assets/images/logos/python.png"
          alt="Python"
        />
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/images/logos/sql.png" alt="sql" />
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/images/logos/php.png" alt="php" />
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/images/logos/cS.png" alt="C#" />
      </div>
      <div class="logo-container">
        <img
          class="logo"
          src="../assets/images/logos/pr.png"
          alt="Premiere Pro"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-logo");
            observer.unobserve(entry.target); // Optionnel: Arrête d'observer une fois animé
          }
        });
      },
      { threshold: 0.1 }
    ); // Déclenche quand 10% de l'élément est visible

    this.$nextTick(() => {
      document.querySelectorAll(".logo").forEach((logo) => {
        observer.observe(logo); // Commence à observer chaque logo
      });
    });
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 5%;
  background-color: black;
}

h1,
h2 {
  text-align: center;
  color: white;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  padding-top: 7%;
}

h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 2%;
  margin-right:1% ;
  margin-left:1% ;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  width: 90%;
  max-width: 1200px;
  justify-content: center; /* Centrer les grilles qui ne remplissent pas tout l'espace */
  justify-items: center; /* Centrer les éléments dans leurs cellules */
  margin-top: 4%;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.1);
}

.logo {
  height: 70px;
  width: 70px;
  object-fit: contain;
  padding: 27px;
  box-sizing: content-box !important;
  transition: transform 0.5s ease;
}

.animate-logo {
  animation: swell 0.8s ease forwards, fadeIn 1.5s ease forwards;
}

@keyframes swell {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 992px) {
  h1 {
    font-size: 3rem;
    font-weight: 700;
    padding-top: 7%;
    line-height: 1.5;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2%;
    line-height: 1.5;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    margin-top: 4%;
  }
  .logo {
    height: 60px;
    width: 60px;
    object-fit: contain;
    padding: 27px;
    box-sizing: content-box !important;
    transition: transform 0.5s ease;
  }
}

@media (max-width: 768px) {
    h1 {
    font-size: 3rem;
    font-weight: 700;
    padding-top: 9%;
    line-height: 1.25;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2%;
    line-height: 1.25;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin-top: 4%;
  }
  .logo {
    height: 55px;
    width: 55px;
    object-fit: contain;
    padding: 27px;
    box-sizing: content-box !important;
    transition: transform 0.5s ease;
  }
}

@media (max-width: 510px) {
    h1 {
    font-size: 2rem;
    font-weight: 700;
    padding-top: 9%;
    line-height: 1.25;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 5%;
    line-height: 1.25;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin-top: 4%;
  }
  .logo {
    height: 50px;
    width: 50px;
    object-fit: contain;
    padding: 27px;
    box-sizing: content-box !important;
    transition: transform 0.5s ease;
  }
}
</style>