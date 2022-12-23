import { Decrypter } from '@/data/protocols/decrypter'
import { DbLoadUserByToken } from '@/data/usecases/db-load-user-by-token'

export const mockDecrypter = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    async decrypt (_token: string): Promise<string> {
      return 'decrypted_token'
    }
  }
  return new DecrypterStub()
}

type SutTypes = {
  sut: DbLoadUserByToken
  decrypterStub: Decrypter
}

const makeSut = (): SutTypes => {
  const decrypterStub = mockDecrypter()
  const sut = new DbLoadUserByToken(decrypterStub)
  return {
    sut,
    decrypterStub
  }
}
describe('DbLoadUserByToken', () => {
  it('Should call Decrypter with correct value', async () => {
    const { sut, decrypterStub } = makeSut()
    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')
    await sut.load('encrypted_token')
    expect(decryptSpy).toHaveBeenCalledWith('encrypted_token')
  })
})
