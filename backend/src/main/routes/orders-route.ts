import { Router } from 'express'
import { makeLoadUserOrdersController } from '@/main/factories'
import { adaptRoute } from '../adapters/express-route-adapter'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/auth-middleware-factory'

export default (router: Router): void => {
  router.get('/orders/user', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeLoadUserOrdersController()))
}
