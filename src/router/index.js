import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Login from '@/views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/login',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
