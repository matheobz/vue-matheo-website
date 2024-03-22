<template>
<hr>
  <footer id="footer">

      <div class="grid">

        <div class="column">

          <p>Site internet entièrement réalisé par moi même.</p>
          <p>Dèreniere mise à jour, mars 2024.</p>
          <p>Merci de m'avoir lu.</p>

        </div>

        <div class="column">

        </div>

      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

#footer {
  background-color: var(--color-bg2-color);
  color: white;
  padding: 20px 0 40px 0;

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

p{
  padding: 1% 0% 0% 1%;
}

</style>
