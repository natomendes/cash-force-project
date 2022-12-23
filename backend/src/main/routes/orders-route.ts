import { makeLoadUserOrdersController, makeAuthMiddleware } from '@/main/factories'
import { adaptMiddleware, adaptRoute } from '@/main/adapters'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/orders/user', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeLoadUserOrdersController()))
}
