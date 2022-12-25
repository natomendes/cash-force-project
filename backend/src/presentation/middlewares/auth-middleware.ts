import { LoadUserByToken } from '@/domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers/http-helpers'
import { AccessDeniedError } from '@/presentation/errors'

export class AuthMiddleware implements Controller {
  constructor (private readonly loadUserByToken: LoadUserByToken) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const user = await this.loadUserByToken.load(accessToken)

        if (user) return ok({ userId: user.id })
      }

      return forbidden(new AccessDeniedError())
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
