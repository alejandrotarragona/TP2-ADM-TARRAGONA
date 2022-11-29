import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'about',
    
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  // {
  //   path: '/login',
  //   name: 'login',
    
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */'../views/login.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
