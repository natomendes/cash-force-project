import { DbLoadUserOrders } from '@/data/usecases/db-load-user-orders'
import { OrderMySqlRepository } from '@/infra/db/mysql/order-repository'
import { LoadUserOrdersController } from '@/presentation/controllers/load-user-orders-controller'

export const makeLoadUserOrdersController = (): LoadUserOrdersController => {
  const orderMySqlRepository = new OrderMySqlRepository()
  const dbLoadUserOrders = new DbLoadUserOrders(orderMySqlRepository)
  return new LoadUserOrdersController(dbLoadUserOrders)
}
