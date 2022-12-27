import { createApp } from 'vue'
import { ApiContext, ApiContextType } from '@/presentation/contexts/api-contexts'
import router from '@/main/router'
import App from './config/App.vue'

createApp(App)
  .use(router)
  .provide<ApiContextType>('ApiContext', ApiContext)
  .mount('#main')
