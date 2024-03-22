<template>
  <div class="scroll-container">
    <div class="movable-object grand-text" :style="objectStyle">Déplace-moi avec le scroll !</div>
  </div>
</template>


<script>
export default {
  name: 'FenetreSection',
  data() {
    return {
      // Ajout d'une propriété réactive pour le défilement
      currentScroll: 0,
      startPosition: window.innerWidth, // Commence en dehors de la fenêtre à droite
      endPosition: 100, // Position finale à 100px de gauche (ajuster selon les besoins)
      startScroll: 100, // Défilement commence à influencer le mouvement
      endScroll: 1000, // Défilement où l'objet atteint sa position finale
    };
  },
  computed: {
    objectStyle() {
      // Utilisation de currentScroll au lieu de window.scrollY directement
      const scrollProgress = (this.currentScroll - this.startScroll) / (this.endScroll - this.startScroll);
      const currentPosition = this.startPosition - (Math.min(Math.max(scrollProgress, 0), 1) * (this.startPosition - this.endPosition));
      
      return {
        transform: `translateX(${currentPosition}px)`,
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    // Initialiser currentScroll au montage pour gérer le rechargement de la page avec un défilement déjà présent
    this.updateScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      // Mettre à jour currentScroll sur l'événement de défilement
      this.currentScroll = window.scrollY;
    },
  },
};
</script>


<style>

.grand-text{
  font-size: 6rem;
  color: transparent;
  -webkit-text-stroke: 2px white;
    text-transform: uppercase;
    color: white;
    margin: -8% 0 0 0;
}

.scroll-container {
  position: relative;
  height: 2000px; /* Assurez-vous d'avoir suffisamment de hauteur pour faire défiler */
  background-color: green;
}

.movable-object {
  position: absolute; /* Utiliser absolute pour le mouvement horizontal */
  top: 1000px; /* Ajuster en fonction des besoins */
  transition: transform 0.2s ease;
}

</style>