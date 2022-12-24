import { Authentication } from '@/domain/usecases/authentication'
import { mockAuthentication } from '@/tests/helpers'
import { LoginController } from '@/presentation/controllers/login-controller'
import { unauthorized } from '@/presentation/helpers/http-helpers'

const mockRequest = {
  body: {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
}

type SutTypes = {
  sut: LoginController
  authenticationStub: Authentication
}

const makeSut = (): SutTypes => {
  const authenticationStub = mockAuthentication()
  const sut = new LoginController(authenticationStub)
  return {
    sut,
    authenticationStub
  }
}

describe('LoginController', () => {
  it('Should call Authentication with correct values', async () => {
    const { sut, authenticationStub } = makeSut()
    const authSpy = jest.spyOn(authenticationStub, 'auth')
    await sut.handle(mockRequest)
    expect(authSpy).toHaveBeenCalledWith(mockRequest.body)
  })

  it('Should return unauthorized if invalid credentials are provided', async () => {
    const { sut, authenticationStub } = makeSut()
    jest.spyOn(authenticationStub, 'auth').mockResolvedValueOnce(null)
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(unauthorized())
  })
})
