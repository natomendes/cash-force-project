import { ValidateToken } from '@/domain/usecases/validate-token'
import { AccessDeniedError } from '@/presentation/errors'
import { forbidden } from '@/presentation/helpers/http-helpers'
import { AuthMiddleware } from '@/presentation/middlewares'

type SutTypes = {
  sut: AuthMiddleware
  validateTokenStub: ValidateToken
}

const mockValidateToken = (): ValidateToken => {
  class ValidateTokenStub implements ValidateToken {
    async validate (token: string): Promise<boolean> {
      return true
    }
  }
  return new ValidateTokenStub()
}

const makeSut = (): SutTypes => {
  const validateTokenStub = mockValidateToken()
  const sut = new AuthMiddleware(validateTokenStub)
  return {
    sut,
    validateTokenStub
  }
}

describe('Auth Middleware', () => {
  it('Should return forbidden if no x-access-token exists in headers', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  it('Should call ValidateToken with correct value', async () => {
    const { sut, validateTokenStub } = makeSut()
    const validateSpy = jest.spyOn(validateTokenStub, 'validate')
    await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(validateSpy).toHaveBeenCalledWith('any_token')
  })

  it('Should return forbidden if token is invalid or expired', async () => {
    const { sut, validateTokenStub } = makeSut()
    jest.spyOn(validateTokenStub, 'validate').mockResolvedValueOnce(false)
    const httpResponse = await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
