import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BasicsView from '../views/BasicsView.vue';
import SetupView from '../views/SetupView.vue';
import LevelsView from '../views/LevelsView.vue';
import RunsView from '../views/RunsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/setup',
            name: 'setup',
            component: SetupView,
        },
        {
            path: '/levels',
            name: 'levels',
            component: LevelsView,
        },
        {
            path: '/levels/:level',
            name: 'level',
            component: BasicsView,
        },
        {
            path: '/runs',
            name: 'runs',
            component: RunsView,
        },
    ],
});

export default router;
