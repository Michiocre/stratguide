import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SectionView from "../views/SectionView.vue";
import SetupView from "../views/SetupView.vue";
import LevelsView from "../views/LevelsView.vue";
import RunsView from "../views/RunsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/setup",
            name: "setup",
            component: SetupView,
        },
        {
            path: "/levels",
            name: "levels",
            component: LevelsView,
        },
        {
            path: "/basics",
            name: "basics",
            component: SectionView,
        },
        {
            path: "/levels/:level",
            name: "level",
            component: SectionView,
        },
        {
            path: "/runs",
            name: "runs",
            component: RunsView,
        },
    ],
});

export default router;
