import { Authentication } from '@/domain/usecases/authentication'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { unauthorized } from '@/presentation/helpers/http-helpers'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body
    const accessToken = await this.authentication.auth({ email, password })
    if (!accessToken) return unauthorized()
  }
}
