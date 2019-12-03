import Vue from 'vue'
import VueRouter from 'vue-router'
import developRouter from '@/router/environment_develop'

Vue.use(VueRouter)

const routes = [
    ...developRouter
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
