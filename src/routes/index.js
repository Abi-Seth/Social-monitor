import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard'
import Notfound from '../views/Notfound'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },





    {
        path: '/:pathMatch(.*)*',
        name: 'Notfound',
        component: Notfound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;