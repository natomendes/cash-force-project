import { OrderModel } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  orders: OrderModel[]
}

export default createContext<Props>(null)
