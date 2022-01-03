import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/entrar',
        name: 'entrar',
        component: () => import('../components/Entrar.vue')
    },
    {
        path: '/registrar',
        name: 'registrar',
        component: () => import('../components/Registrar.vue')
    },
    {
        path: '/nova_url',
        name: 'nova_url',
        component: () => import('../components/url/Cadastro.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
