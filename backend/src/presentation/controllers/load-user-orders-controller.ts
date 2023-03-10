import { LoadUserOrders } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers/http-helpers'

export class LoadUserOrdersController implements Controller {
  constructor (private readonly loadUserOrders: LoadUserOrders) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const orders = await this.loadUserOrders.load(httpRequest.userId)

      return ok(orders)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
