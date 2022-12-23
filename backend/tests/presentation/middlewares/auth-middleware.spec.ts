import { AccessDeniedError } from '@/presentation/errors'
import { forbidden } from '@/presentation/helpers/http-helpers'
import { AuthMiddleware } from '@/presentation/middlewares'

const makeSut = (): AuthMiddleware => {
  return new AuthMiddleware()
}

describe('Auth Middleware', () => {
  it('Should return forbidden if no x-access-token exists in headers', async () => {
    const sut = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
