<template>
    <main>
        <h1 class="pageHeading">{{ level.name }} Movement Tech</h1>
        <p class="pageDescription">{{ level.description }}</p>
        <div v-for="[key, value] of Object.entries(level.moves)" v-bind:key="key.id">
            <Content :id="value.id" :content="value" />
        </div>
    </main>
</template>

<script>
import Content from '@/components/Content.vue';
export default {
    data: function () {
        return {
            hash: this.$route.hash,
        };
    },
    mounted() {
        this.$nextTick(function () {
            if (this.hash) {
                const refName = this.hash.replace('#', '');
                this.scrollToAnchorPoint(refName);
            }
        });
    },
    methods: {
        scrollToAnchorPoint(refName) {
            const el = document.getElementById(refName);
            console.log(refName);
            console.log(el);
            el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        },
    },
    components: {
        Content,
    },
    computed: {
        level() {
            return this.allContent.levels[this.$route.params.level] || this.allContent.levels.basics;
        },
    },
};
</script>
