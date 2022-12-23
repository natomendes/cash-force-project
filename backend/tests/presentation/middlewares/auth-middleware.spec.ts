import { LoadUserByToken } from '@/domain/usecases/load-user-by-token'
import { AccessDeniedError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers/http-helpers'
import { AuthMiddleware } from '@/presentation/middlewares'
import { mockLoadUserByToken } from '@/tests/helpers/usecases'

const mockRequest = {
  headers: {
    'x-access-token': 'any_token'
  }
}

type SutTypes = {
  sut: AuthMiddleware
  loadUserByTokenStub: LoadUserByToken
}

const makeSut = (): SutTypes => {
  const loadUserByTokenStub = mockLoadUserByToken()
  const sut = new AuthMiddleware(loadUserByTokenStub)
  return {
    sut,
    loadUserByTokenStub
  }
}

describe('Auth Middleware', () => {
  it('Should return forbidden if no x-access-token exists in headers', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  it('Should call LoadUserByToken with correct value', async () => {
    const { sut, loadUserByTokenStub } = makeSut()
    const loadSpy = jest.spyOn(loadUserByTokenStub, 'load')
    await sut.handle(mockRequest)
    expect(loadSpy).toHaveBeenCalledWith('any_token')
  })

  it('Should return forbidden if token is invalid or expired', async () => {
    const { sut, loadUserByTokenStub } = makeSut()
    jest.spyOn(loadUserByTokenStub, 'load').mockResolvedValueOnce(null)
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  it('Should return ok if LoadUserByToken returns a user', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(ok({ userId: 1 }))
  })

  it('Should return server error if LoadUserByToken throws', async () => {
    const { sut, loadUserByTokenStub } = makeSut()
    jest.spyOn(loadUserByTokenStub, 'load').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(serverError())
  })
})
