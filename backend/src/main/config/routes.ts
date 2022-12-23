import { Express, Router } from 'express'
import ordersRoute from '@/main/routes/orders-route'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)

  ordersRoute(router)
}
