<template>
    <main>
        <h1 class="pageHeading">Techniques by Level</h1>
        <div class="container">
            <RouterLink
                v-for="level of levels"
                v-bind:key="level.id"
                :to="'/levels/' + level.id"
                class="element"
            >
                <div class="image">
                    <img :src="imgSrc(level.image || '')" :alt="level.id + '_alt'" />
                </div>
                <h1 class="title">{{level.name}}</h1>
            </RouterLink>
        </div>
    </main>
</template>

<script>
import Content from "@/components/Content.vue";
export default {
    methods: {
        imgSrc(name) {
            return new URL(`../assets/${name}`, import.meta.url).href;
        }
    },
    computed: {
        levels() {
            console.log(this.allContent.levels);
            return this.allContent.levels;
        },
    },
};
</script>

<style scoped>

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    padding: 0 0.5rem;
}

img {
    width: 100%;
    height: auto;
}

.element {
    position: relative;
    color: inherit;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in-out;
}

.element:hover {
    transform: scale(1.05);
}

.title {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: color 1s ease-in-out;
}

.title:hover {
    color: white;
}

.image {
    line-height: 0;
    filter: blur(1px);
}
</style>
