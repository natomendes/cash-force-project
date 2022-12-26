import { OrderModel } from '@/domain/models'

export interface LoadOrdersByAccessToken {
  load (accessToken: string): Promise<OrderModel>
}
