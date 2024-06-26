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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/members',
      name: 'members',
      component: ()=> import('../views/MembersView.vue')
    },
    {
      path: '/members/:id',
      component: ()=> import('../views/MemberInfo.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: ()=> import('../views/VideosView.vue'),
      children : [
        {
          path: ":id",
          component: ()=> import('../views/VideoPlayer.vue')
        }
      ]
    }
  ]
})

export default router
