import { OrderModel } from '@/domain/models/order'

export interface LoadUserOrdersRepo {
  loadByUserId (userId: string): Promise<OrderModel[]>
}
