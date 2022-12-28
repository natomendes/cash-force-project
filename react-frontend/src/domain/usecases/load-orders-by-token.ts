import { OrderModel } from '@/domain/models'

export interface LoadOrdersByToken {
  loadAll (accessToken: string): Promise<OrderModel[]>
}
