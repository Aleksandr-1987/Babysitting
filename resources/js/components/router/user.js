export default [
    {
        name: 'Home',
        path: '/',
        meta: {layout: 'User'},
        component: () =>import('../../pages/user/Home.vue')        
    },
    {
        name: 'Login',
        path: '/login',
        meta: {layout: 'User'},
        component: () =>import('../../pages/user/Login.vue')
    },
    {
        name: 'Register-menu',
        path: '/register_menu',
        meta: {layout: 'User'},
        component: () =>import('../../pages/user/Register-menu.vue')
    },
    {
        name: 'Register',
        path: '/register',
        meta: {layout: 'User'},
        component: () =>import('../../pages/user/Register.vue')
    },
    {
        name: 'Register-employer',
        path: '/register_employer',
        meta: {layout: 'User'},
        component: () =>import('../../pages/user/Register-employer.vue')
    },
    {
        name: '404',
        path: '/:pathMatch(.*)',
        component: () =>import('../../pages/user/Home.vue')
    }
]

 