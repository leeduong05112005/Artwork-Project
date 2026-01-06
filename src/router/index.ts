import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/home/index.vue'
import LoginView from '../views/auth/Login.vue'
import HeroView from '../views/Hero.vue'
import ExploreView from '../views/explore/index.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/',
        redirect: '/hero'
    },
    {
        path: '/hero',
        name: 'hero',
        component: HeroView
    },
    {
        path: '/explore',
        name: 'explore',
        component: ExploreView
    },
    {
        path: '/home',
        name: 'home',
        component: IndexView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
