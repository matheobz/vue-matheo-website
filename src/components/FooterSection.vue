<template>
  <footer id="footer">
    <hr>
    <div class="footer-content">
      <div class="brand-section">
        <img src="../assets/images/m-blanc.png" alt="Beeper Logo" class="logo" />
        <p>© 2024 Beeper Inc.</p>
      </div>
      <div class="links-section">
        <div class="links-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Jobs @ Beeper</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div class="links-column">
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
        </div>
        <div class="links-column">
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
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.brand-section {
  text-align: left;
}

.brand-section .logo {
  max-width: 100px;
  margin-bottom: 10px;
}

.links-column h4 {
  margin-bottom: 10px;
  color: #aaa;
}

.links-column ul {
  list-style: none;
  padding: 0;
}

.links-column li a {
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;
}

.links-column li a:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .links-section {
    margin-top: 20px;
  }
  
  .links-column {
    margin-bottom: 20px;
  }
}

hr {
  height: 1px !important; /* Définit la hauteur de votre hr */
  background-color: white !important; /* Définit la couleur de fond du hr */
  opacity: 1 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

</style>
