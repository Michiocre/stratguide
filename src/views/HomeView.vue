<template>
    <main>
        <h1 class="pageHeading">Technique of the day:</h1>
        <RouterLink :to="randomContent[0]">
            <Content :content="randomContent[1]" />
        </RouterLink>
    </main>
</template>

<script>
import Content from "@/components/Content.vue";
import seedrandom from "seedrandom";
export default {
    components: {
        Content,
    },
    computed: {
        randomContent() {
            let allMoves = [];

            for (let key of Object.keys(this.allContent)) {
                let part = this.allContent[key];
                if (typeof part != "object") continue;
                if (Array.isArray(part)) {
                    for (let level of part) {
                        if (level.moves?.length > 0) {
                            for (let move of level.moves) {
                                allMoves.push([
                                    `/${key}/${level.id}#${move.id}`,
                                    move,
                                ]);
                            }
                        }
                    }
                }

                if (part.moves?.length > 0) {
                    for (let move of part.moves) {
                        allMoves.push([`/${key}#${move.id}`, move]);
                    }
                }
            }

            let rand = Math.floor(
                seedrandom(new Date().getDate())() * allMoves.length
            );
            return allMoves[rand];
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
