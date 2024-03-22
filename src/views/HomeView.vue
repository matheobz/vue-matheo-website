<template>
  <!-- <FenetreSection/> -->
  
  <OrbBackground/>

  <HeaderSection/>

  <AccordionSection/>

  <PresentationSection/>

  <CardsSection/>
    
  <TechnoSection/>

  <ContactSection/>

  <FooterSection/>

  <FenetreSection/>
  

</template>

<script>
import OrbBackground from '../components/OrbBackground.vue';
import TechnoSection from '../components/TechnoSection.vue';
import ContactSection from '../components/ContactSection.vue';
import CardsSection from '../components/CardsSection.vue';
import AccordionSection from '../components/AccordionSection.vue';
import FooterSection from '../components/FooterSection.vue';
import PresentationSection from '../components/PresentationSection.vue';
import HeaderSection from '../components/HeaderSection.vue';

// import FenetreSection from '../components/FenetreSection.vue';

export default {
  components: {
    OrbBackground,
    CardsSection,
    TechnoSection,
    ContactSection,
    AccordionSection,
    FooterSection,
    PresentationSection,
    HeaderSection,

    // FenetreSection
  }
}


</script>

<style scoped lang="scss">

</style>