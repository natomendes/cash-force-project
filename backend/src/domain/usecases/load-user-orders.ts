import { OrderModel } from '../models/order'

export interface LoadUserOrders {
  load (userId: string): Promise<OrderModel>
}
