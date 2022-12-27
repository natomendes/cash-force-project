import Login from '@/presentation/pages/login/Login-page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '../config/App.vue'

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/',
  name: 'App',
  component: AppVue
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
