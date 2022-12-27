import { OrderModel } from '@/domain/models'
import { makeRemoteLoadOrdersByToken } from '../factories/usecases/load-orders'
import { getCurrentAccountAdapter } from './current-token-adapter'

export const loadOrdersAdapter = async (): Promise<OrderModel[]> => {
  const account = getCurrentAccountAdapter()
  if (account) {
    const data = await makeRemoteLoadOrdersByToken().loadAll(account.accessToken)

    return data
  }
  return null
}
