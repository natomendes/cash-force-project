import { RemoteLoadOrdersByToken } from '@/data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadOrdersByToken = (): RemoteLoadOrdersByToken => {
  return new RemoteLoadOrdersByToken(makeApiUrl('/orders/user'), makeAxiosHttpClient())
}
