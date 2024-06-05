import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'read_list',
      component: () => import('../components/board/Board_read_list.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../components/board/Board_create.vue')
    },{
      path: '/update',
      name: 'update',
      component: () => import('../components/board/Board_update.vue')
    },{
      path: '/read_one/:id',
      name: 'read_one',
      component: () => import('../components/board/Board_read_one.vue')
    },{
      path: '/:paths(.*)*',
      name: 'NotFound',
      component: () => import('../components/NotFound.vue')
    },
  ]
})

export default router
