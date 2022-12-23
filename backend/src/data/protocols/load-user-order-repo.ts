import { OrderModel } from '@/domain/models'

export interface LoadUserOrdersRepo {
  loadByUserId (userId: string): Promise<OrderModel[]>
}
