<template>
    <section id="container">
        <h1>Tableau des compétences</h1>
        <h2>design by me :)</h2>

        <div class="grid">
            <div class="carre carreVUE">
                <div class="text-top-right">1</div>
                <img src="../assets/images/logos/vue.png" alt="Logo Vue Js" class="logo">
                <div class="text-under-logo">Vue</div>
            </div>
            <div class="hidden"></div>
            <div class="hidden"></div>
            <div class="carre carreCSS">
                <div class="text-top-right">2</div>
                <img src="../assets/images/logos/css.png" alt="Logo CSS" class="logo">
                <div class="text-under-logo">CSS</div>
            </div>
            <div class="carre carreHTML">
                <div class="text-top-right">3</div>
                <img src="../assets/images/logos/html.png" alt="Logo HTML" class="logo">
                <div class="text-under-logo">HTML</div>
            </div>
            <div class="carre carreFLUTTER">
                <div class="text-top-right">4</div>
                <img src="../assets/images/logos/flutter.png" alt="Logo Flutter" class="logo">
                <div class="text-under-logo">Flutter</div>
            </div>
            <div class="carre carreSQL">
                <div class="text-top-right">5</div>
                <img src="../assets/images/logos/sql.png" alt="Logo SQL" class="logo">
                <div class="text-under-logo">SQL</div>
            </div>
            <div class="carre carrePYTHON">
                <div class="text-top-right">6</div>
                <img src="../assets/images/logos/python.png" alt="Logo Python" class="logo">
                <div class="text-under-logo">Python</div>
            </div>
            <div class="carre carrePHP">
                <div class="text-top-right">7</div>
                <img src="../assets/images/logos/php.png" alt="Logo php" class="logo">
                <div class="text-under-logo">php</div>
            </div>
            <div class="carre carreJS">
                <div class="text-top-right">8</div>
                <img src="../assets/images/logos/js.png" alt="Logo Javascript" class="logo">
                <div class="text-under-logo">JavaScript</div>
            </div>
            <div class="carre carreHTML">
                <div class="text-top-right">9</div>
                <img src="../assets/images/logos/html.png" alt="Logo HTML" class="logo">
                <div class="text-under-logo">HTML</div>
            </div>
            <div class="carre carreHTML">
                <div class="text-top-right">10</div>
                <img src="../assets/images/logos/html.png" alt="Logo HTML" class="logo">
                <div class="text-under-logo">HTML</div>
            </div>
            <div class="carre carreHTML">
                <div class="text-top-right">11</div>
                <img src="../assets/images/logos/html.png" alt="Logo HTML" class="logo">
                <div class="text-under-logo">HTML</div>
            </div>
            <div class="carre carreCS">
                <div class="text-top-right">12</div>
                <img src="../assets/images/logos/cS.png" alt="Logo C#" class="logo">
                <div class="text-under-logo">C#</div>
            </div>
            <div class="carre carreJAVA">
                <div class="text-top-right">13</div>
                <img src="../assets/images/logos/java.png" alt="Logo Java" class="logo">
                <div class="text-under-logo">Java</div>
            </div>
            <div class="hidden">
            </div><div class="hidden">
            </div><div class="hidden">
            </div><div class="hidden">
            </div><div class="hidden"></div>
            <div class="hidden"></div>
            <div class="hidden"></div>
            <div class="carre carrePS">
                <div class="text-top-right">14</div>
                <img src="../assets/images/logos/ps.png" alt="Logo Photoshop" class="logo">
                <div class="text-under-logo">Photoshop</div>
            </div>
            <div class="carre carrePR">
                <div class="text-top-right">15</div>
                <img src="../assets/images/logos/pr.png" alt="Logo Premiere Pro" class="logo">
                <div class="text-under-logo">PremièrePro</div>
            </div>
            <div class="hidden"></div>
            
        </div>
    </section>
</template>



<script>
export default {
   
}
</script>


<style scoped lang="scss">
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 190vh;
    color: white;
}

h1, h2 {
    text-align: center;
    font-weight: 700;
    margin-top: 7%;
}

h1 {
    font-size: 50px;
}

h2 {
    font-weight: 400;
    font-size: 25px;
    margin-top: 2%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(5, 100px); /* Crée 5 colonnes */
    grid-gap: 10px; /* Espacement entre les carrés */
    justify-content: center;
    margin-top: 5rem;
}

.carre {
    position: relative;
    width: 100px; /* Taille des carrés */
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: transform 0.4s ease;
    border: 4px solid; /* Couleur par défaut, à personnaliser par carré */
    &:hover {
        transform: scale(1.25); /* Effet de zoom au survol */
    }
}

/* Classes pour cacher les carrés */
.hidden {
    position: relative;
    width: 100px; /* Taille des carrés */
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


.carreVUE { border-color:rgb(54, 176, 35); }
.carreHTML { border-color: rgb(255, 102, 0); }
.carreCSS { border-color: rgb(50, 50, 248); }
.carreJS { border-color: rgb(255, 182, 46); }
.carreFLUTTER { border-color: purple; }
.carreCS{ border-color: purple; }
.carreJAVA { border-color: rgb(245, 0, 0); }
.carrePHP { border-color: rgb(75, 122, 182); }
.carrePYTHON { border-color: rgb(32, 39, 130); }
.carreSQL { border-color: rgb(38, 110, 149); }

.carrePR { border-color: rgb(139, 0, 194); }
.carrePS { border-color: rgb(0, 73, 220); }


.logo {
    width: 50%;
    align-self: center;
}

.text-top-right, .text-under-logo {
    color: white;
    font-weight: 700;
    animation: neonText 1.5s infinite alternate;
}

.text-top-right {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 12px;
}

.text-under-logo {
    position: absolute;
    bottom: 6px;
    width: 100%;
    text-align: center;
    font-size: 12px;
}

@keyframes neonText {
    from {
        text-shadow: 0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff;
    }
    to {
        text-shadow: 0 0 12px #ffffff, 0 0 20px #ffffff, 0 0 28px #ffffff;
    }
}
</style>
