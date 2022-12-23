import { DbLoadUserOrders } from '@/data/usecases'
import { OrderMySqlRepository } from '@/infra/db/mysql'

export const makeDbLoadUserOrders = (): DbLoadUserOrders => {
  const orderMySqlRepository = new OrderMySqlRepository()
  return new DbLoadUserOrders(orderMySqlRepository)
}
