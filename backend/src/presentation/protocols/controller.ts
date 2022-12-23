import { HttpRequest, HttpResponse } from '@/presentation/protocols/https'

export interface Controller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
