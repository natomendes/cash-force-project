import { Router } from 'express'
import { makeLoadUserOrdersController } from '@/main/factories'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/orders/user', adaptRoute(makeLoadUserOrdersController()))
}
