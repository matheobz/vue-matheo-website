<template>

  <div id="container">

    <div class="contact">

      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86737.01090813839!2d-1.5142527497981346!3d47.20617996308197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8aead%3A0x40d37521e0ded30!2sNantes!5e0!3m2!1sfr!2sfr!4v1710607702324!5m2!1sfr!2sfr" 
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="form">
        <h1>Me contacter</h1>
        <form action="https://formsubmit.co/4dd6801f8e459ca1d130c3f8ec9c9e88" method="POST">
          <input type="text" name="name" required placeholder="Name">
          <input type="email" name="email" required placeholder="Email">
          <input type="text" name="subject" required placeholder="Subject">
          <textarea name="message" required placeholder="Message"></textarea>
          <button type="submit">Envoyer</button>
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="http://localhost:8080/mailsend">
          
        </form>

      </div>

    </div>

  </div>

</template>

<script>

</script>


<style scoped lang="scss">

#container{
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  // background-image: url("../assets/images/bg-contact.jpg");
  // background-size: cover;
  background-color: #25262D;
  background-position: center;
  width: 100%;

  background: linear-gradient(145deg, #090b1f,#401355);

}

.contact {
  height: 70vh;
  width: 75vw;
  box-shadow: 0 .2rem .5rem #0006;
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
}

.map, .form {
  width: 50%;
  height: 100%;
}

.map iframe{
  width: 100%;
  height: 100%;
}

.form {
  position: relative;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.form::before {
  position: absolute;
  top: 10%;
  left: -2.7rem;
  content: "";
  width: 0;
  height: 0;
  border: 1.4rem solid transparent;
  border-right: 1.4rem solid black;

}

.form h1{
  color: white;
  font: 500 1.8rem;
  padding: 0 2rem;
}

.form form{
  padding: 0 2rem;
}

.form input, .form textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border: .08rem solid white;
  border-radius: 2rem;
  background-color: unset;
  color: white;
  font-size: 1rem;

}

.form input:not(:first-child), .form textarea, .form button {

  margin-top: .8rem;

}

.form textarea {
  height: 6rem;
  resize: none;
} 


.form button {
  background-color: #b03be8 ;
  padding: 1rem 2rem;
  color: white;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
}


</style>