<template>
  <div id="container">

    <div class="contact">
      
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
<div class="grid">
      <div class="colum">
        <div class="form">
        <h1>Prendre contact en 2 click !</h1>
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
      <div class="colum">
        <div class="map">
         
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

.form form{
  padding: 0 2rem;
}

.form input, .form textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border: .08rem solid white;
  border-radius: 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
}

.form input:not(:first-child), .form textarea, .form button {
  margin-top: 1rem;
}

.form textarea {
  height: 8rem;
  resize: none;
} 


.form button {
  background-color: #b03be8 ;
  padding: 1rem 2rem;
  color: white;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
}


.grid {
  display: flex;
  background: linear-gradient(145deg, #090b1f,#401355);
}

.grid .colum {
  height: 80vh;
  width: 50%;
  
  display: flex;
  flex-direction: column;
}

.grid .colum h1 {
  color: white;
  font: 500 1.8rem;
  padding: 5rem 7rem;
}



</style>