<template>
    <section id="container">
        <h1>Tableau des compétences</h1>
        <h2>design by me :)</h2>

        <div class="grid">
            <!-- Carré 1 -->
            <div class="carre carre1">
                <div class="text-top-right">1</div>
                <img src="../assets/images/logos/html.png" alt="Logo HTML" class="logo">
                <div class="text-under-logo">HTML</div>
            </div>
            <!-- Carré 2 -->
            <div class="hidden">
            </div>
            <!-- Carré 3 -->
            <div class="carre carre3 ">
                <div class="text-top-right">2</div>
                <img src="../assets/images/logos/css.png" alt="Logo CSS" class="logo">
                <div class="text-under-logo">CSS</div>
            </div>
            <!-- Carré 4 -->
            <div class="carre carre4">
                <div class="text-top-right">2</div>
                <img src="../assets/images/logos/css.png" alt="Logo CSS" class="logo">
                <div class="text-under-logo">CSS</div>
            </div>
            <!-- Ajoutez d'autres carrés ici selon le même modèle -->
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
    height: 90vh;
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
    margin-top: 20px;
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

/* Classes pour personnaliser la couleur de la bordure de chaque carré */
.carre1 { border-color: blue; }

.carre3 { border-color: yellow; }
.carre4 { border-color: orange; }
.carre5 { border-color: purple; }
/* Ajoutez autant de classes .carreN { border-color: #VotreCouleur; } que nécessaire */

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
