<template>
    <main>
        <h1 class="pageHeading">Techniques by Level</h1>
        <div class="container">
            <RouterLink to="/levels/swamp" class="element swamp">
                <h1 class="linkText">Swamp</h1>
            </RouterLink>
            <RouterLink to="/levels/hijack" class="element">
                <h1 class="linkText">Hijack</h1>
            </RouterLink>
            <RouterLink to="/levels/hunt1" class="element">
                <h1 class="linkText">Hunt 1</h1>
            </RouterLink>
            <RouterLink to="/levels/hunt2" class="element">
                <h1 class="linkText">Hunt 2</h1>
            </RouterLink>
            <RouterLink to="/levels/hunt3" class="element">
                <h1 class="linkText">Hunt 3</h1>
            </RouterLink>
            <RouterLink to="/levels/hunt4" class="element">
                <h1 class="linkText">Hunt 4</h1>
            </RouterLink>
            <RouterLink to="/levels/factory" class="element">
                <h1 class="linkText">Factory</h1>
            </RouterLink>
            <RouterLink to="/levels/hamletStart" class="element">
                <h1 class="linkText">Hamlet Start</h1>
            </RouterLink>
            <RouterLink to="/levels/hamletMines" class="element">
                <h1 class="linkText">Hamlet Mines</h1>
            </RouterLink>
            <RouterLink to="/levels/hamletEnd" class="element">
                <h1 class="linkText">Hamlet End</h1>
            </RouterLink>
            <RouterLink to="/levels/prisonSteed" class="element">
                <h1 class="linkText">Prison Steed</h1>
            </RouterLink>
            <RouterLink to="/levels/prisonPIB" class="element">
                <h1 class="linkText">Prison PIB</h1>
            </RouterLink>
            <RouterLink to="/levels/prisonShrek" class="element">
                <h1 class="linkText">Prison Shrek</h1>
            </RouterLink>
            <RouterLink to="/levels/castleSiege" class="element">
                <h1 class="linkText">Castle Siege</h1>
            </RouterLink>
            <RouterLink to="/levels/fgmFight" class="element">
                <h1 class="linkText">FGM Fight</h1>
            </RouterLink>
        </div>
    </main>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5%;
    place-items: center;
    justify-items: center;
    padding: 0 0.5rem;
}

.swamp {
    background: rgba(0, 0, 0, 0.7) url('swamp.png');
}

.element {
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    color: inherit;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
}

.linkText {
    text-align: center;
    padding: 3em 0;
    margin: 0;
    width: 100%;
    backdrop-filter: blur(3px);
}
</style>
