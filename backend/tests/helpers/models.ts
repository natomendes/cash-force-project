import { OrderModel } from '@/domain/models/order'

export const mockOrderModelList = (): OrderModel[] => [{
  id: 1,
  orderNumber: 'any_order_number',
  buyer: { id: 1, name: 'any_buyer' },
  provider: { id: 2, name: 'any_provider' },
  emissionDate: 'any_date',
  value: 'any_value',
  orderStatusBuyer: 'any_status'
}, {
  id: 2,
  orderNumber: 'other_order_number',
  buyer: { id: 1, name: 'other_buyer' },
  provider: { id: 2, name: 'other_provider' },
  emissionDate: 'other_date',
  value: 'other_value',
  orderStatusBuyer: 'other_status'
}]
