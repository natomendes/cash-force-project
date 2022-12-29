import { OrderModel } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadOrdersByToken } from '@/domain/usecases/load-orders-by-token'
import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteLoadOrdersByToken implements LoadOrdersByToken {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<OrderModel[]>
  ) {}

  async loadAll (accessToken: string): Promise<OrderModel[]> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      headers: {
        'x-access-token': accessToken
      }
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
