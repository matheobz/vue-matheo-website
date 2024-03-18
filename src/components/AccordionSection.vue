<template>

    <div id="container" class="body">

            
        <main>
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
                <img src="../assets/images/img-theme-2.jpg" alt="" class="image">
                <img src="../assets/images/img-theme-2.jpg" alt="" class="background">
                <div class="layer">
                    <div class="info">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque.</p>
                    </div>
                </div>
            </div>
            <div class="card lineUp3">
                <img src="../assets/images/img-theme-3.jpg" alt="" class="image">
                <img src="../assets/images/img-theme-3.jpg" alt="" class="background">
                <div class="layer">
                    <div class="info">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque.</p>
                    </div>
                </div>
            </div>
            <div class="card lineUp4">
                <img src="../assets/images/img-theme-4.jpg" alt="" class="image">
                <img src="../assets/images/img-theme-4.jpg" alt="" class="background">
                <div class="layer">
                    <div class="info">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque.</p>
                    </div>
                </div>
            </div>
            <div class="card lineUp5">
                <img src="../assets/images/car.png" alt="" class="image">
                <video class="background-video" autoplay loop muted>
                    <source src="../assets/videos/backgroundcar.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <div class="layer">
                    <div class="info">
                        <h1>Partagez Votre Passion</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>

<script>
export default {
}
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
    width: 460px;
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


</style>