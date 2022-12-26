import { OrderModel } from '@/domain/models'
import { LoadOrdersByToken } from '@/domain/usecases/load-orders-by-token'
import { HttpGetClient } from '@/data/protocols/http'

export class RemoteLoadOrdersByToken implements LoadOrdersByToken {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<OrderModel[]>
  ) {}

  async loadAll (accessToken: string): Promise<OrderModel[]> {
    await this.httpGetClient.get({
      url: this.url,
      headers: {
        'x-access-token': accessToken
      }
    })
    return null
  }
}
