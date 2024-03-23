<template>

    <div id="container" class="body">
        <main>
        <h2>5 images pour me découvrir</h2>
            <div class="card lineUp1">
                <img src="../assets/images/img-theme-1.jpg" alt="" class="image">
                <img src="../assets/images/img-theme-1.jpg" alt="" class="background">
                <div class="layer">
                    <div class="info">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque.</p>
                    </div>
                </div>
            </div>
            <div class="card lineUp2">
                <img src="../assets/images/album.jpg" alt="" class="image">
                <video class="background-video" autoplay loop muted>
                    <source src="../assets/videos/montagne.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <div class="layer">
                    <div class="info">
                        <h1>Albume photo numérique</h1>
                        <p>Pourquoi pas revivre ces souvenirs à travert un format différent qui offre 
                            la magie des vidéos.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="card lineUp3">
                <img src="../assets/images/work-img.jpg" alt="" class="image">
                <img src="../assets/images/work.jpg" alt="" class="background">
                <div class="layer">
                    <div class="info">
                        <h1>Site d'entreprise</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque.</p>
                    </div>
                </div>
            </div>
            
            <div class="card lineUp4">
                <img src="../assets/images/car.png" alt="" class="image">
                <video class="background-video" autoplay loop muted>
                    <source src="../assets/videos/backgroundcar.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <div class="layer">
                    <div class="info">
                        <h1>Blog, et platforme de partage</h1>
                        <p>Partager votre passion à travert un blog en ligne, ou autre concespt qui n'aurais
                            comme seul limite votre imagination. 
                        </p>
                    </div>
                </div>
            </div>

            <div class="card card-3 lineUp5">
                <img src="../assets/images/data.jpg" alt="" class="image-3">
                <img class="background-3">
                <div class="layer">
                    <div class="info">
                        <h1>Votre projet, Ma mission</h1>
                        <p>project perso, une idée inovante
                        </p>
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>

<script>

</script>




<style scoped lang="scss">

.background-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100vh;
    width: auto;
    height: auto;
    z-index: -1;
    object-fit: cover; // Assure que la vidéo couvre l'espace disponible sans déformation
    filter: brightness(.25);
    opacity: 0; // Commencez par rendre la vidéo transparente
    transition: opacity 0.5s ease; // Transition douce pour l'apparition
}

.card:hover .background-video {
    opacity: 1; // Rend la vidéo visible lors du survol
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:white ;
    transition: 0.5s;
}

#container{
    margin-top: -4% ;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.body::before{
    content:"";
    // background-image: url("../assets/images/img-theme-3.jpg");
    position: absolute;
    width: 100%;
    height: 100vh;
    background-size:cover;
    background-position: center;
    filter: brightness(.5); //.25 par défaut
    z-index: -1;
}

.title-container {
    width: 100%;    
    text-align: center;
    margin-bottom: 20px;
    color: white;
    font-size: 2rem;
}

main{
    width: 1400px;
    height: 500px;
    display: flex;
    gap: 15px;
}

.card {
    width: 20%;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
}

.card:hover {
    width: 80%;
}


.card .image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card:hover .image {
    transform: scale(1.2);
}

.card-3:hover {
    border: 1px solid rgb(255, 255, 255);
}


.card .image-3 {
    position: relative; /* Nécessaire pour le positionnement absolu du pseudo-élément */
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card:hover .image-3 {
    opacity: 0; /* Rend l'image complètement transparente au survol */
    transition: opacity 0.5s ease; /* Transition douce pour l'effet de disparition */
}

.card .image-3::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid green; /* Ajustez la couleur de bordure selon vos préférences */
    opacity: 0; /* Initialement invisible */
    transition: opacity 0.5s ease; /* Transition douce pour l'apparition */
}

.card:hover .image-3::after {
    opacity: 1; /* Rend le cadre visible au survol */
}

.card .background-3 {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
    filter: brightness(.25);
    opacity: 0;
    background-color: rgba(255, 255, 255, 0);
}


.card .background{
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
    filter: brightness(.25);
    opacity: 0;

}


.card:hover .background {
    opacity: 1;
}

.card .layer{
    width: 100%;
    height: 50%;
    margin-top: -250px;
    position: relative;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);


}

.card .layer .info {
    width: 470px;
    position: absolute;
    bottom: 10px;
    padding: 20px;
    opacity: 0;

}

.card:hover .layer .info {
    opacity: 1;
}

.info p {
    color: rgba(255, 255, 255, .75);
    margin-top: 5px;
    line-height: 1.5;

}

.info h1 {
    color: rgb(255, 255, 255);
    line-height: 1.3;

}

.lineUp1 {
  animation: 1s anim-lineUp ease-out;
}

.lineUp2 {
  animation: 1.25s anim-lineUp ease-out;
}

.lineUp3 {
  animation: 1.5s anim-lineUp ease-out;
}

.lineUp4 {
  animation: 1.75s anim-lineUp ease-out;
}

.lineUp5 {
  animation: 2s anim-lineUp ease-out;
}
.lineUp6 {
  animation: 3s anim-lineUp ease-out;
}

@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

h2{
    position: absolute;
    margin-top: -2.5%;
    margin-left: .5%;
    font-size: 30px;
    animation: 3s anim-lineUp ease-out;
}


</style>