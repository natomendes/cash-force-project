import { createApp } from 'vue'
import router from '@/main/router'
import App from './config/App.vue'

createApp(App)
  .use(router)
  .mount('#main')
