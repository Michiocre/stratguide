<template>
    <main>
        <h1 class="pageHeading">{{ section.name }} Movement Tech</h1>
        <p class="pageDescription">{{ section.description }}</p>
        <div v-if="section.moves">
            <div
                v-for="[key, value] of Object.entries(section.moves)"
                v-bind:key="key.id"
            >
                <Content :id="value.id" :content="value" />
            </div>
        </div>
        <div v-else>
            <h2>
                No content has been added to this level yet, if you want to help fill these pages visit the <a href="https://github.com/Michiocre/stratguide">github</a>.
            </h2>
        </div>
    </main>
</template>

<script>
import Content from "@/components/Content.vue";
export default {
    data: function () {
        return {
            hash: this.$route.hash,
        };
    },
    mounted() {
        this.$nextTick(function () {
            if (this.hash) {
                const refName = this.hash.replace("#", "");
                this.scrollToAnchorPoint(refName);
            }
        });
    },
    methods: {
        scrollToAnchorPoint(refName) {
            const el = document.getElementById(refName);
            el.scrollIntoView(true);
        },
    },
    components: {
        Content,
    },
    computed: {
        section() {
            switch (this.$route.name) {
                case "level":
                    return this.allContent.levels.find(
                        (val) => val.id == this.$route.params.level
                    );
                default:
                    return this.allContent[this.$route.name];
            }
        },
    },
};
</script>
