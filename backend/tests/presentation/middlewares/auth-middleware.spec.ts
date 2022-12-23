import { UserModel } from '@/domain/models/user'
import { LoadUserByToken } from '@/domain/usecases/load-user-by-token'
import { AccessDeniedError } from '@/presentation/errors'
import { forbidden, ok } from '@/presentation/helpers/http-helpers'
import { AuthMiddleware } from '@/presentation/middlewares'

type SutTypes = {
  sut: AuthMiddleware
  loadUserByTokenStub: LoadUserByToken
}

const mockLoadUserByToken = (): LoadUserByToken => {
  class LoadUserByTokenStub implements LoadUserByToken {
    async load (_token: string): Promise<UserModel> {
      return {
        id: 1,
        name: 'any_name',
        email: 'any_email'
      }
    }
  }
  return new LoadUserByTokenStub()
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
    await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(loadSpy).toHaveBeenCalledWith('any_token')
  })

  it('Should return forbidden if token is invalid or expired', async () => {
    const { sut, loadUserByTokenStub } = makeSut()
    jest.spyOn(loadUserByTokenStub, 'load').mockResolvedValueOnce(null)
    const httpResponse = await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  it('Should return ok if LoadUserByToken returns a user', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(httpResponse).toEqual(ok({ userId: 1 }))
  })
})
