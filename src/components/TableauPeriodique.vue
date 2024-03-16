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
$color-vue: rgb(54, 176, 35);
$color-html: rgb(255, 102, 0);
$color-css: rgb(50, 50, 248);
$color-js: rgb(255, 182, 46);
$color-flutter: rgb(13, 142, 182);
$color-cs: purple;
$color-java: rgb(245, 0, 0);
$color-php: rgb(75, 122, 182);
$color-python: rgb(32, 39, 130);
$color-sql: rgb(38, 110, 149);
$color-pr: rgb(139, 0, 194);
$color-ps: rgb(0, 73, 220);

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


.carreVUE { border-color: $color-vue; }
.carreHTML { border-color: $color-html; }
.carreCSS { border-color: $color-css; }
.carreJS { border-color: $color-js; }
.carreFLUTTER { border-color: $color-flutter; }
.carreCS{ border-color: $color-cs; }
.carreJAVA { border-color: $color-java; }
.carrePHP { border-color: $color-php; }
.carrePYTHON { border-color: $color-python; }
.carreSQL { border-color: $color-sql; }
.carrePR { border-color: $color-pr; }
.carrePS { border-color: $color-ps; }

.carreVUE .text-top-right, .carreVUE .text-under-logo { color: $color-vue; text-shadow: 0 0 8px $color-vue, 0 0 16px $color-vue, 0 0 24px $color-vue; }
.carreHTML .text-top-right, .carreHTML .text-under-logo { color: $color-html; text-shadow: 0 0 8px $color-html, 0 0 16px $color-html, 0 0 24px $color-html; }
.carreCSS .text-top-right, .carreCSS .text-under-logo { color: $color-css; text-shadow: 0 0 8px $color-css, 0 0 16px $color-css, 0 0 24px $color-css; }
.carreJS .text-top-right, .carreJS .text-under-logo { color: $color-js; text-shadow: 0 0 8px $color-js, 0 0 16px $color-js, 0 0 24px $color-js; }
.carreFLUTTER .text-top-right, .carreFLUTTER .text-under-logo { color: $color-flutter; text-shadow: 0 0 8px $color-flutter, 0 0 16px $color-flutter, 0 0 24px $color-flutter; }
.carreCS .text-top-right, .carreCS .text-under-logo { color: $color-cs; text-shadow: 0 0 8px $color-cs, 0 0 16px $color-cs, 0 0 24px $color-cs; }
.carreJAVA .text-top-right, .carreJAVA .text-under-logo { color: $color-java; text-shadow: 0 0 8px $color-java, 0 0 16px $color-java, 0 0 24px $color-java; }
.carreSQL .text-top-right, .carreSQL .text-under-logo { color: $color-sql; text-shadow: 0 0 8px $color-sql, 0 0 16px $color-sql, 0 0 24px $color-sql; }
.carrePYTHON .text-top-right, .carrePYTHON .text-under-logo { color: $color-python; text-shadow: 0 0 8px $color-python, 0 0 16px $color-python, 0 0 24px $color-python; }
.carrePHP .text-top-right, .carrePHP .text-under-logo { color: $color-php; text-shadow: 0 0 8px $color-php, 0 0 16px $color-php, 0 0 24px $color-php; }
.carrePR .text-top-right, .carrePR .text-under-logo { color: $color-pr; text-shadow: 0 0 8px $color-pr, 0 0 16px $color-pr, 0 0 24px $color-pr; }
.carrePS .text-top-right, .carrePS .text-under-logo { color: $color-ps; text-shadow: 0 0 8px $color-ps, 0 0 16px $color-ps, 0 0 24px $color-ps; }



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
        text-shadow: 0 0 8px , 0 0 16px , 0 0 24px ;
    }
    to {
        text-shadow: 0 0 12px , 0 0 20px , 0 0 28px ;
    }
}

.carreVUE .text-top-right, .carreVUE .text-under-logo { color: $color-vue; text-shadow: 0 0 8px $color-vue, 0 0 16px $color-vue, 0 0 24px $color-vue; }
.carreHTML .text-top-right, .carreHTML .text-under-logo { color: $color-html; text-shadow: 0 0 8px $color-html, 0 0 16px $color-html, 0 0 24px $color-html; }

</style>
