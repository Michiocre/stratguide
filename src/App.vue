<template>
    <header>
        <RouterLink to="/"><h2>Shrek 2 Speedrunning Guide</h2></RouterLink>
        <nav>
            <RouterLink class="mainLink" to="/">Home</RouterLink>
            <RouterLink class="mainLink" to="/setup">Setup</RouterLink>
            <RouterLink class="mainLink" to="/basics">Basics</RouterLink>
            <RouterLink class="mainLink" to="/levels">Levels</RouterLink>
            <RouterLink class="mainLink" to="/runs">Full Runs</RouterLink>
        </nav>
    </header>

    <RouterView class="main" />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
@import "@/assets/base.css";

header {
    background: var(--vt-c-black);
    position: fixed;
    z-index: 10000;
    top: 0px;
    width: 100%;
    padding: 1rem 15%;
    display: flex;
    place-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
}

nav {
    display: flex;
    width: 50%;
    justify-content: space-between;
}

nav a,
.green {
    text-decoration: none;
    transition: 0.4s;
}

nav .mainLink:hover {
    text-decoration: underline;
}

nav .router-link-active {
    font-size: 120%;
}

header > a {
    display: inline;
    color: var(--color-text);
    text-decoration: none;
}

.main {
    width: 70%;
    margin: 5rem 15%;
}

.pageHeading {
    margin: 1rem 0.5rem;
}

.pageDescription {
    margin: 1rem 0.5rem;
}
</style>
