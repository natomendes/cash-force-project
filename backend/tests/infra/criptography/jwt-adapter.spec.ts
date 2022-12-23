import jwt from 'jsonwebtoken'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter'
import { mockUserModel } from '@/tests/helpers/models'

jest.mock('jsonwebtoken', () => ({
  verify (): jwt.JwtPayload {
    return { user: mockUserModel() }
  }
}))

const secret = 'any_secret'
const makeSut = (): JwtAdapter => {
  return new JwtAdapter(secret)
}

describe('Jwt Adapter', () => {
  it('Should call jwt.verify with correct values', async () => {
    const sut = makeSut()
    const verifySpy = jest.spyOn(jwt, 'verify')
    await sut.decrypt('encrypted_token')
    expect(verifySpy).toHaveBeenCalledWith('encrypted_token', secret)
  })

  it('Should return an user id on jwt.verify success', async () => {
    const sut = makeSut()

    const user = await sut.decrypt('encrypted_token')

    expect(user).toBe(mockUserModel().id)
  })

  it('Should return null if jwt verify throws', async () => {
    const sut = makeSut()
    jest.spyOn(jwt, 'verify').mockImplementationOnce(() => { throw new Error() })

    const user = await sut.decrypt('encrypted_token')

    expect(user).toBeNull()
  })
})
