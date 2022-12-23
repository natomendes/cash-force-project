import { OrderModel } from '@/domain/models'

export interface LoadUserOrders {
  load (userId: string): Promise<OrderModel[]>
}
