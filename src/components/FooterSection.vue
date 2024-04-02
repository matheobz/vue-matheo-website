<template>
  <hr />
  <footer id="footer">
    <div class="grid">
      <div class="column">
        <p>© Tout droit réservé</p>
        <p>Dèreniere mise à jour, Avril 2024.</p>
        <p>Mathéo</p>
      </div>

      <div class="column"></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#footer {
  background-color: var(--color-bg2-color);
  color: white;
  padding: 20px 0 25px 0;
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

p {
  padding: 10px 0% 0% 10px;
}

@media (max-width: 510px) {
  p {
    font-size: 0.9rem;
  }
}
</style>
