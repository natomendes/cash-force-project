import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { AccessDeniedError } from '@/presentation/errors'
import { forbidden } from '@/presentation/helpers/http-helpers'
import { ValidateToken } from '@/domain/usecases/validate-token'

export class AuthMiddleware implements Controller {
  constructor (private readonly validateToken: ValidateToken) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      await this.validateToken.validate(accessToken)
    }

    return forbidden(new AccessDeniedError())
  }
}
