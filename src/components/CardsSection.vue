<template>
  <div id="container">
      <h1>Mes compétences</h1>
      <div class="boxes">
        <div class="column">
          <div class="box">
            <h4>Open Source Protocol</h4>
            <p>Remember this XKCD comic? That’s why we built Beeper Cloud on the open source chat protocol Matrix. Unlike other chat networks, there is no lock-in. You’re free to use open source Matrix clients to connect to Beeper Cloud, or download your data and move to a different Matrix server and continue chatting with your friends on Beeper Cloud.
              Beeper contributes back to the Matrix community. All of our Matrix bridges are open source on our Github. Don't want to pay for Beeper Cloud? Self-host your own instance for free.</p>
          </div>
          <div class="box">
            <h4>Powerful Desktop App</h4>
            <p>Most chat apps treat desktop as a second class citizen. Not us! Our desktop app is fast, fully-featured and full of keyboard shortcuts to help you get through your inbox. Beeper Cloud runs on Windows, Mac OS, Linux and Chrome OS.</p>
          </div>
          <div class="box">
            <h4>15 Chat Networks - 1 App</h4>
            <p>Contenu de la boîte 1...</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h4>Secure Encrypted Chat</h4>
            <p>Privacy is a fundamental human right...</p>
          </div>
          <div class="box">
            <h4>Our Business Model Is Simple</h4>
            <p>We are building the best chat app on Earth. No ads...</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>


<style scoped lang="scss">

#container {
  background-color: #25262D;
  padding: 6% 2% 0;
}

h1 {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}

.boxes {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
  padding-top: 3em;
}

.boxes .column {
  width: 48.5%;
  display: flex;
  flex-direction: column;
}

.boxes .column .box {
  background-color: white;
  border-radius: 25px;
  padding: 4rem;
  margin-bottom: 6%;
}

.boxes .column .box h4 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  line-height: 1.5;
  background-image: linear-gradient(90deg, #9c4ce0, #f98e86);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  display: inline-block;
}

.boxes .column .box p {
  color: #131b3a;
  font-size: 1.36rem;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 3%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans;
}
</style>