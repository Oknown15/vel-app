import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeLayout.vue';
import ServicesViews from '../views/ServicesLayout.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView

    },
    {
        path: '/Services',
        name: 'Services',
        component: ServicesViews
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;