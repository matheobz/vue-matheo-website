<template>
  <OrbBackground />

  <HeaderSection />

  <AccordionSection />

  <PresentationSection />

  <CardsSection />

  <TechnoSection />

  <ContactSection />

  <FooterSection />
</template>

<script>
import OrbBackground from "../components/OrbBackground.vue";
import HeaderSection from "../components/HeaderSection.vue";
import AccordionSection from "../components/AccordionSection.vue";
import PresentationSection from "../components/PresentationSection.vue";
import CardsSection from "../components/CardsSection.vue";
import TechnoSection from "../components/TechnoSection.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";

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

    // FenetreSection
  },
};
</script>

<style scoped lang="scss">
</style>