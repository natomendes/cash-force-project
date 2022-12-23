import { OrderModel } from '@/domain/models/order'
import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { LoadUserOrdersRepo } from '@/data/protocols/load-user-order-repo'

export class DbLoadUserOrders implements LoadUserOrders {
  constructor (private readonly loadUserOrdersRepo: LoadUserOrdersRepo) {}

  async load (userId: string): Promise<OrderModel[]> {
    await this.loadUserOrdersRepo.loadByUserId(userId)

    return null
  }
}
