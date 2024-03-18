<template>
<hr>
  <footer id="footer">
    <div class="footer-content">
      <div class="grid">

        <div class="column brand-section">
          <img src="../assets/images/m-blanc.png" alt="Beeper Logo" class="logo" />
          <p>© 2024 Beeper Inc.</p>
        </div>

        <div class="column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Jobs @ Beeper</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>


          <h4>App</h4>
          <ul>
            <li><a href="#">Download</a></li>
            <li><a href="#">Beeper Mini</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Self-host</a></li>
            <li><a href="#">System status</a></li>
          </ul>

          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Security</a></li>
          </ul>


        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

#footer {
  background-color: #25262D;
  color: white;
  padding: 20px 0 40px 0;

}
.brand-section {
  text-align: left;
}

.brand-section .logo {
  max-width: 100px;
  margin-bottom: 10px;
}

.column h4 {
  margin-bottom: 10px;
  color: #aaa;
}

.column ul {
  list-style: none;
  padding: 0;
}

.column li a {
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;
}

.links-column li a:hover {
  text-decoration: underline;
}


hr {
  height: 0.5px !important;
  background-color: white !important;
  opacity: 1 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.grid {
  display: flex;
}

.grid .column {
  width: 50%;
  display: flex;
  flex-direction: column;
}

</style>
