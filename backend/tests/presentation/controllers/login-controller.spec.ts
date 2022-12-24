import { Authentication } from '@/domain/usecases'
import { mockAuthentication, mockValidation } from '@/tests/helpers'
import { Validation } from '@/presentation/protocols'
import { MissingParamError } from '@/presentation/errors'
import { LoginController } from '@/presentation/controllers/login-controller'
import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers/http-helpers'

const mockRequest = {
  body: {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
}

type SutTypes = {
  sut: LoginController
  authenticationStub: Authentication
  validationStub: Validation
}

const makeSut = (): SutTypes => {
  const authenticationStub = mockAuthentication()
  const validationStub = mockValidation()
  const sut = new LoginController(authenticationStub, validationStub)
  return {
    sut,
    authenticationStub,
    validationStub
  }
}

describe('LoginController', () => {
  it('Should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    await sut.handle(mockRequest)
    expect(validateSpy).toHaveBeenCalledWith(mockRequest.body)
  })

  it('Should return bad request if Validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })

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

  it('Should return server error if Authentication throws', async () => {
    const { sut, authenticationStub } = makeSut()
    jest.spyOn(authenticationStub, 'auth').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(serverError())
  })

  it('Should return ok and the access token on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest)
    expect(httpResponse).toEqual(ok({ accessToken: 'valid_token' }))
  })
})
