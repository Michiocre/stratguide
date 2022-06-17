<template>
    <div :id="content.id" class="wrapper">
        <h1 class="green">{{ content.name }}</h1>
        <div class="container">
            <div class="content" v-for="entry of content.structure" v-bind:key="entry.id">
                <span v-if="entry.type == 'text'">{{ entry.content }}</span>
                <img :src="'/content/' + entry.content" v-if="entry.type == 'image' || entry.type == 'gif'" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
    },
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    justify-items: center;
    height: 100%;
}

img {
    max-height: 200px;
    max-width: 500px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.wrapper {
    background: var(--color-background-soft);
    border-radius: 1em;
    padding: 1em;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
}
</style>
