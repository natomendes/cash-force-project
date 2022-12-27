import { faker } from '@faker-js/faker'
import { OrderModel } from '../models'

const mockOrder = (): OrderModel => ({
  id: faker.datatype.number(),
  orderNumber: faker.datatype.string(),
  Buyer: {
    id: faker.datatype.number(),
    name: faker.datatype.string()
  },
  Provider: {
    id: faker.datatype.number(),
    name: faker.datatype.string()
  },
  emissionDate: faker.datatype.string(),
  value: faker.datatype.string(),
  orderStatusBuyer: faker.datatype.string()
})

export const mockOrderList = (): OrderModel[] => [
  mockOrder(),
  mockOrder(),
  mockOrder()
]
