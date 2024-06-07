import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/CounterView.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/CalcView.vue')
    },
    {
      path: '/todo/list',
      name: 'todolist',
      component: () => import('../components/todo/TodoList.vue')
    },
    {
      path: '/todo/view/:id',
      name: 'todoview',
      component: () => import('../components/todo/TodoView.vue')
    }
  ]
})

export default router
