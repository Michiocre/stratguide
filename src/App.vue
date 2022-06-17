<template>
    <header>
        <h2>Shrek 2 Speedrunning Guide</h2>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/setup">Setup</RouterLink>
            <RouterLink to="/levels/basics">Basics</RouterLink>
            <RouterLink to="/levels">Levels</RouterLink>
            <RouterLink to="/runs">Full Runs</RouterLink>
        </nav>
    </header>

    <RouterView class="main" />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
@import '@/assets/base.css';

#app,
body {
    padding-bottom: 5rem;
}

header {
    background: var(--vt-c-black);
    position: sticky;
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

h2 {
    display: inline;
}

.main {
    width: 70%;
    margin: 1rem 15%;
}

a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

a:hover {
    text-decoration: underline;
}

.router-link-active {
    font-weight: bold;
}

.pageHeading {
    margin: 1rem 0.5rem;
}

.pageDescription {
    margin: 1rem 0.5rem;
}
</style>
