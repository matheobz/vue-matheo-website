<template>
  <AppLoading  v-if="isLoading" />
  <div v-else>
    <OrbBackground />
    <HeaderSection />
    <AccordionSection />
    <PresentationSection />
    <CardsSection />
    <TechnoSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
// Importez tous vos autres composants, puis ajoutez :
import OrbBackground from "../components/OrbBackground.vue";
import HeaderSection from "../components/HeaderSection.vue";
import AccordionSection from "../components/AccordionSection.vue";
import PresentationSection from "../components/PresentationSection.vue";
import CardsSection from "../components/CardsSection.vue";
import TechnoSection from "../components/TechnoSection.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";
import AppLoading from "../components/AppLoading.vue";


export default {
  components: {
    OrbBackground,
    HeaderSection,
    AccordionSection,
    PresentationSection,
    CardsSection,
    TechnoSection,
    ContactSection,
    FooterSection,
    AppLoading,
  },
  data() {
    return {
      isLoading: true, // Ajoutez cette ligne
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; // Simulez la fin du chargement après un certain temps
    }, 2000); // Par exemple, après 2 secondes
  },
};
</script>


<style scoped lang="scss">
</style>