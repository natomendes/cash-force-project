import ordersRoute from '@/main/routes/orders-route'
import loginRoute from '@/main/routes/login-route'
import { Express, Router } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)

  ordersRoute(router)
  loginRoute(router)
}
