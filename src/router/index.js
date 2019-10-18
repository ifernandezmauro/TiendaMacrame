import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: () => import('../views/Inicio')
        }, {
            path: '/productos',
            name: 'Productos',
            component: () => import('../views/Productos')
        }
        , {
            path: '/tutoriales',
            name: 'Tutoriales',
            component: () => import('../views/Tutoriales')
        }, {
            path: '/acerca',
            name: 'Acerca',
            component: () => import('../views/Acerca')
        }, {
            path: '/producto',
            name: 'Producto',
            component: () => import('../views/Producto')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router