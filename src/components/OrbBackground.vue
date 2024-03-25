<template>
    <section class="background-orb">
        <div class="orb2"></div>
        <div class="orb3"></div>
        <div class="orb4"></div>
        <div class="orb1"></div>
    </section>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments du DOM
    const orbs = [
        document.querySelector('.orb1'),
        document.querySelector('.orb2'),
        document.querySelector('.orb3'),
        document.querySelector('.orb4')
    ];
    const backgroundOrb = document.querySelector('.background-orb');

    // Initialisation des positions et des vitesses des orbs
    let orbPositions = [
        { x: 400, y: 100, dx: 0.45, dy: 0.095 },
        { x: null, y: 50, dx: -0.15, dy: 0.08 },
        { x: null, y: null, dx: -0.3, dy: -0.09 },
        { x: 0, y: null, dx: 0.25, dy: -0.07 }
    ];

    // Fonction pour mettre à jour la position d'un orb
    function updateOrbPosition(orbIndex, x, y) {
        orbs[orbIndex].style.left = `${x}px`;
        orbs[orbIndex].style.top = `${y}px`;
    }

    // Fonction pour s'assurer que les orbs restent dans les limites
    function ensureOrbsStayWithinBounds() {
        const containerRect = backgroundOrb.getBoundingClientRect();
        orbPositions.forEach((pos, index) => {
            let { x, y } = pos;
            const orbRect = orbs[index].getBoundingClientRect();

            // Ajustement des positions pour garder l'orb à l'intérieur du container
            if (x + orbRect.width > containerRect.width) x = containerRect.width - orbRect.width;
            if (x < 0) x = 0;
            if (y + orbRect.height > containerRect.height) y = containerRect.height - orbRect.height;
            if (y < 0) y = 0;

            // Mise à jour des positions et application
            orbPositions[index].x = x;
            orbPositions[index].y = y;
            updateOrbPosition(index, x, y);
        });
    }

    // Fonction pour animer un orb
    function animateOrb(index) {
        let { x, y, dx, dy } = orbPositions[index];

        // Mise à jour de la position en fonction de la vitesse
        x += dx;
        y += dy;

        const orbRect = orbs[index].getBoundingClientRect();
        const containerRect = backgroundOrb.getBoundingClientRect();

        // Inverser la vitesse si l'orb touche les limites du container
        if (x <= 0 || x + orbRect.width >= containerRect.width) orbPositions[index].dx = -dx;
        if (y <= 0 || y + orbRect.height >= containerRect.height) orbPositions[index].dy = -dy;

        // Mise à jour de la position
        orbPositions[index].x = x;
        orbPositions[index].y = y;
        updateOrbPosition(index, x, y);

        requestAnimationFrame(() => animateOrb(index));
    }

    // Observateur pour ajuster les orbs lors du redimensionnement du container
    const resizeObserver = new ResizeObserver(ensureOrbsStayWithinBounds);
    resizeObserver.observe(backgroundOrb);

    // Initialisation des positions basées sur la taille de backgroundOrb
    orbPositions[1].x = backgroundOrb.clientWidth - 200;
    orbPositions[2].x = backgroundOrb.clientWidth - 150;
    orbPositions[2].y = backgroundOrb.clientHeight - 200;
    orbPositions[3].y = backgroundOrb.clientHeight - 150;

    // Lancement de l'animation pour chaque orb
    orbs.forEach((_, index) => animateOrb(index));
});
</script>


<style scoped lang="scss">

$orb-size-base: 50vh;
$orb-z-index: -1;
$orb-opacity-standard: 0.75;
$orb-blur: 140px; /*140px*/

$orb-color1: var(--color-primary-color); /* #b03be8 */
$orb-color2: var(--color-secondary-color); /* #6757e7 */
$orb-color3: var(--color-third-color); /* #4958f5 */
$orb-color4: $orb-color1;

@mixin orb-style($size, $color, $opacity: $orb-opacity-standard) {
  position: absolute;
  height: $size;
  width: $size;
  background-color: $color;
  border-radius: 50%;
  opacity: $opacity;
  z-index: $orb-z-index;
}

.background-orb {
  width: 92%;
  height: 82vh;
  position: absolute;
  margin-top: 30vh;
  display: block;
  filter: blur($orb-blur);
  z-index: -1;
  margin-left: 4%;
  margin-right: 4%;
}

.orb1 {
  @include orb-style(60vh, $orb-color1, 1);
  z-index: -2;
}

.orb2 {
  @include orb-style(70vh, $orb-color2);
}

.orb3 {
  @include orb-style(50vh, $orb-color3);
}

.orb4 {
  @include orb-style(82vh, $orb-color4, 1);
}

</style>