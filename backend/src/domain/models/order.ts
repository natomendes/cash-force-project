export type OrderProvider = {
  id: number
  name: string
}

export type OrderBuyer = {
  id: number
  name: string
}

export interface OrderModel {
  id: number
  orderNumber: string
  buyer: OrderBuyer
  provider: OrderProvider
  emissionDate: string
  value: string
  orderStatusBuyer: string
}
