import Login from '@/presentation/pages/login/Login-page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentAccountAdapter } from '../adapters/current-token-adapter'
import Dashboard from '@/presentation/pages/dashboard/dashboard.vue'

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/',
  name: 'Dashboard',
  component: Dashboard
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const account = getCurrentAccountAdapter()
  if (to.name !== 'Login' && !account) {
    return {
      name: 'Login',
      replace: true
    }
  }
})

export default router
