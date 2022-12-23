import { OrderModel } from '@/domain/models'
import { LoadUserOrders } from '@/domain/usecases'
import { LoadUserOrdersRepo } from '@/data/protocols'

export class DbLoadUserOrders implements LoadUserOrders {
  constructor (private readonly loadUserOrdersRepo: LoadUserOrdersRepo) {}

  async load (userId: string): Promise<OrderModel[]> {
    return await this.loadUserOrdersRepo.loadByUserId(userId)
  }
}
