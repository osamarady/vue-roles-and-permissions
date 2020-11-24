import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Plan from '../views/plan.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/category.vue')
  },
  { path: '/plan', name: 'plan', component: Plan },
  { path: '**', name: 'not-found', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach( function (to, from, next) {
  let auth = (localStorage.getItem('user') == null ? false : true)
  
  if (to.name !== 'Login' && auth == false) next({name: 'Login'})
  else if (to.name == 'Login' && auth == true) next({name: 'category'})
  else next()
})

export default router
