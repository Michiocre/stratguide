<template>
    <main>
        <h1 class="pageHeading">Technique of the day:</h1>
        <RouterLink :to="'/levels/' + randomContent[0] + '#' + randomContent[1].id">
            <Content :content="randomContent[1]" />
        </RouterLink>
    </main>
</template>

<script>
import Content from '@/components/Content.vue';
export default {
    components: {
        Content,
    },
    computed: {
        randomContent() {
            let levelKeys = Object.keys(this.allContent.levels);
            let levelIndex = (new Date().getDate() * 17) % levelKeys.length;
            let levelRand = levelKeys[levelIndex];

            let moveKeys = Object.keys(this.allContent.levels[levelRand].moves);
            let moveIndex = (new Date().getDate() * 27) % moveKeys.length;
            let moveRand = moveKeys[moveIndex];

            return [levelRand, this.allContent.levels[levelRand].moves[moveRand]];
        },
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}

h1 {
    margin: 0.5rem;
}
</style>
