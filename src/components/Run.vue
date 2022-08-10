<template>
    <div class="wrapper">
        <YoutubeVue3
            class="youtubePlayer"
            :ref="content.id"
            autoplay="0"
            :videoid="videoId"
            :width="vw"
            :height="vh"
        />
        <div class="activeText">
            <Router-Link v-if="activeLink" :to="activeLink.url">{{
                activeLink.text
            }}</Router-Link>
            {{ activeText }}
        </div>
    </div>
</template>

<script>
import { YoutubeVue3 } from "youtube-vue3";
export default {
    components: {
        YoutubeVue3,
    },
    props: {
        content: Object,
    },
    data() {
        return {
            activeText: "",
            activeLink: null,
        };
    },
    methods: {
        async updateText() {
            let time = await this.$refs[
                this.content.id
            ]?.player.getCurrentTime();
            let timeStamp = null;
            if (time) {
                for (const entry of this.content.timeStamps) {
                    if (entry.time < time) {
                        timeStamp = entry;
                        break;
                    }
                }
            }

            if (timeStamp) {
                this.activeText = timeStamp.text;
                this.activeLink = timeStamp.link;
            } else {
                this.activeText = this.content.description;
            }
        },
    },
    mounted() {
        window.setInterval(() => {
            this.updateText();
        }, 500);
    },
    computed: {
        videoId() {
            return this.content.url.split("v=")[1];
        },
        vw() {
            let vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            return vw / 2 - 30;
        },
        vh() {
            return this.vw * 0.56;
        },
    },
};
</script>

<style scoped>
h1 {
    margin-bottom: 1em;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.activeText {
    background: var(--color-background-soft);
    width: calc(100vw / 2 - 30px);
    padding: 1em;
    border-radius: 1em;
    margin: 1em 0;
    min-height: 2rem;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
}

.youtubePlayer {
    width: calc(100vw / 2 - 30px);
    height: calc((100vw / 2 - 30px) * 0.56);
}
</style>
