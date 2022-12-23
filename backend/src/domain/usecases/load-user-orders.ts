import { OrderModel } from '@/domain/models/order'

export interface LoadUserOrders {
  load (userId: string): Promise<OrderModel[]>
}
