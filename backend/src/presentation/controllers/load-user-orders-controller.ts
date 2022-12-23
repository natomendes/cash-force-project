import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class LoadUserOrdersController implements Controller {
  constructor (private readonly loadUserOrders: LoadUserOrders) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadUserOrders.load(httpRequest.userId)
    return null
  }
}
