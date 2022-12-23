import { LoadUserOrdersController } from '@/presentation/controllers/load-user-orders-controller'
import { makeDbLoadUserOrders } from './db-load-user-orders-factory'

export const makeLoadUserOrdersController = (): LoadUserOrdersController => {
  return new LoadUserOrdersController(makeDbLoadUserOrders())
}
