import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../view/Home.vue')
    },
    {
        path: '/entrar',
        name: 'entrar',
        component: () => import('../view/usuario/Entrar.vue')
    },
    {
        path: '/registrar',
        name: 'registrar',
        component: () => import('../view/usuario/Registrar.vue')
    },
    {
        path: '/nova_url',
        name: 'nova_url',
        component: () => import('../view/url/Cadastro.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
