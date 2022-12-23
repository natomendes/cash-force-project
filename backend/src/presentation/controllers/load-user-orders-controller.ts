import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { ServerError } from '@/presentation/errors'

export class LoadUserOrdersController implements Controller {
  constructor (private readonly loadUserOrders: LoadUserOrders) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.loadUserOrders.load(httpRequest.userId)

      return null
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}
