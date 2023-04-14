import { createRouter, createWebHistory } from 'vue-router'
const CreateView = () => import('../views/Create/CreateView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CreateView
    }
  ]
})

export default router
