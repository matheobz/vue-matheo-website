<template>
    <div id="container">
        <h1>Technologie maitrisé </h1>
        <h2>Étudier dans le cadre de mes études ou en perso !</h2>

        <div class="block">
            <div class="row">
                    <div class="logo-container"><img class="logo logo-container" src="../assets/images/logos/html.png" alt="html"></div>
                    <div class="logo-container"><img class="logo" src="../assets/images/logos/css.png" alt="css"></div>
                    <div class="logo-container"><img class="logo" src="../assets/images/logos/js.png" alt="javascript"></div>
                    <div class="logo-container"><img class="logo" src="../assets/images/logos/java.png" alt="java"></div>
                   <div class="logo-container"> <img class="logo flutter" src="../assets/images/logos/flutter.png" alt="flutter"></div>
                   <div class="logo-container"> <img class="logo" src="../assets/images/logos/ps.png" alt="Photo Shop"></div>
            </div>
            <div class="row">
                  <div class="logo-container">  <img class="logo" src="../assets/images/logos/vue.png" alt="vue"></div>
                  <div class="logo-container">  <img class="logo" src="../assets/images/logos/python.png" alt="Python"></div>
                  <div class="logo-container">  <img class="logo" src="../assets/images/logos/sql.png" alt="sql"></div>
                  <div class="logo-container">  <img class="logo" src="../assets/images/logos/php.png" alt="php"></div>
                  <div class="logo-container">  <img class="logo" src="../assets/images/logos/cS.png" alt="C#"></div>
                  <div class="logo-container">  <img class="logo" src="../assets/images/logos/pr.png" alt="Premiere Pro"></div>
            </div>
        </div>




    </div>
</template>


<script>
export default {
    mounted() {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-logo');
                    observer.unobserve(entry.target); // Optionnel: Arrête d'observer une fois animé
                }
            });
        }, { threshold: 0.1 }); // Déclenche quand 10% de l'élément est visible

        this.$nextTick(() => {
            document.querySelectorAll('.logo').forEach(logo => {
                observer.observe(logo); // Commence à observer chaque logo
            });
        });
    }
}
</script>

<style scoped lang="scss">

#container{
    width: 100%;
   padding-bottom: 5%;

}

h1{
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: white;
    margin-top: 7%;
}

h2{
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    color: white;
    margin-top: 2%;
}

.block {
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;


}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto; 
     transition: transform 0.3s ease; /* Applique une transition fluide pour l'entrée et la sortie */

}
.logo-container:hover{
    transform: scale(1.1);
       
}

.logo {
    height: 70px; 
    width: 70px;
    object-fit: contain;
    padding: 27px 50px;
    box-sizing: content-box !important;
    transition: transform 0.5s ease;
}

.animate-logo {
    animation: swell 0.8s ease forwards, fadeIn 1.5s ease forwards;
}

@keyframes swell {
    from { transform: scale(0.5); }
    to { transform: scale(1); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}


</style>