<template>
  <div class="container" id="sectionContact">
    <div class="grid">
      
      <div class="column">
        <h1>Mes coordonnées</h1>
      </div>
    <div class="column">
    <h1>Ou,prendre contact en 2 click ;)</h1>
    </div></div>

    <div class="grid">
      <div class="column">
        </div>
      <div class="column">
        <div class="form">
        <form action="https://formsubmit.co/4dd6801f8e459ca1d130c3f8ec9c9e88" method="POST">
          <input type="text" name="name" required placeholder="Name">
          <input type="email" name="email" required placeholder="Email">
          <input type="text" name="subject" required placeholder="Sujet">
          <textarea name="message" required placeholder="Message"></textarea>
          <button type="submit">
          <span>Envoyer</span>
          <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
          </svg>
          </button>
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="http://localhost:8080/mailsend">
        </form>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

</script>


<style scoped lang="scss">

.container{

  background-position: center;
  width: 100%;

  background: linear-gradient(145deg, #090b1f,#401355);

  box-sizing: border-box;

}

.map, .form {
  width: 64%;
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
  font-family: "Mona Sans", "Mona Sans Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

}

.form input:not(:first-child), .form textarea, .form button {
  margin-top: 1rem;
}

.form textarea {
  height: 10rem;
  resize: none;
} 

.grid {
  display: flex;
}

.grid .column {
  width: 100%;
  
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
}

.grid .column h1 {
  color: white;
  font: 500 1.8rem;
  padding: 5rem 2.5rem;
}

.form button {
  background-color: #b03be8 ;
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
  transition: filter var(0.3s);

  margin-bottom: 2rem;
}

button:hover {
  filter: brightness(1.1);
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
  fill: #b03be8;
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
}

button > svg > path {
  transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

button:hover > svg > path {
  d: path("M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0");
}

button:active > svg > path {
  d: path("M0,0 C30,10 70,10 100,0 C95,30 95,70 100,100 C70,90 30,90 0,100 C5,70 5,30 0,0");
}



</style>