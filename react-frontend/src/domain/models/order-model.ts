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
  Buyer: OrderBuyer
  Provider: OrderProvider
  emissionDate: string
  value: string
  orderStatusBuyer: string
}
