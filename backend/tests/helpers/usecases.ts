import { LoadUserOrdersRepo } from '@/data/protocols/load-user-order-repo'
import { OrderModel } from '@/domain/models/order'
import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { mockOrderModelList } from '@/tests/helpers/models'

export const mockLoadUserOrders = (): LoadUserOrders => {
  class LoadUserOrdersStub implements LoadUserOrders {
    async load (_userId: string): Promise<OrderModel[]> {
      return mockOrderModelList()
    }
  }
  return new LoadUserOrdersStub()
}

export const mockLoadUserOrdersRepo = (): LoadUserOrdersRepo => {
  class LoadUserOrdersRepoStub implements LoadUserOrdersRepo {
    async loadByUserId (_userId: string): Promise<OrderModel[]> {
      return mockOrderModelList()
    }
  }
  return new LoadUserOrdersRepoStub()
}
