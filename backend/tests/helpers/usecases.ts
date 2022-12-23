import { OrderModel } from '@/domain/models/order'
import { LoadUserOrders } from '@/domain/usecases/load-user-orders'

export const mockLoadUserOrders = (): LoadUserOrders => {
  class LoadUserOrdersStub implements LoadUserOrders {
    async load (_userId: string): Promise<OrderModel> {
      return {
        id: 1,
        orderNumber: 'any_order_number',
        buyer: { id: 1, name: 'any_buyer' },
        provider: { id: 2, name: 'any_provider' },
        emissionDate: 'any_date',
        value: 'any_value',
        orderStatusBuyer: 'any_status'
      }
    }
  }
  return new LoadUserOrdersStub()
}
