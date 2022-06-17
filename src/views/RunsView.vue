<template>
    <main>
        <h1 class="pageHeading">Full Runs Explained</h1>
        <p class="pageDescription">Start watching a run and see what techniques are being used.</p>
        <div class="container">
            <Run v-for="entry of allContent.runs" v-bind:key="entry.id" :content="entry" />
        </div>
    </main>
</template>

<script>
import Run from '@/components/Run.vue';
export default {
    components: {
        Run,
    },
};
</script>
