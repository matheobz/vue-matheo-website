<template>
  <div id="container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="message">Message :</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.$http.post('/send-email', this.form); // Remplacez '$http' par votre méthode HTTP (axios, fetch, etc.)
        alert('Message envoyé avec succès !');
        this.form = { name: '', email: '', message: '' }; // Réinitialiser le formulaire
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message :', error);
        alert('Erreur lors de l\'envoi du message.');
      }
    }
  }
}
</script>


<style scoped lang="scss">
#container{
    background-color: white ;
    padding: 10%;
}




</style>