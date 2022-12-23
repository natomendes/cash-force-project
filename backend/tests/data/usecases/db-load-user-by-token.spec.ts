import { Decrypter } from '@/data/protocols/decrypter'
import { DbLoadUserByToken } from '@/data/usecases/db-load-user-by-token'
import { LoadUserByIdRepo } from '@/data/protocols/load-user-by-id-repo'
import { mockDecrypter, mockLoadUserByIdRepo } from '@/tests/helpers/usecases'
import { mockUserModel } from '@/tests/helpers/models'

type SutTypes = {
  sut: DbLoadUserByToken
  decrypterStub: Decrypter
  loadUserByIdRepoStub: LoadUserByIdRepo
}

const makeSut = (): SutTypes => {
  const loadUserByIdRepoStub = mockLoadUserByIdRepo()
  const decrypterStub = mockDecrypter()
  const sut = new DbLoadUserByToken(decrypterStub, loadUserByIdRepoStub)
  return {
    sut,
    decrypterStub,
    loadUserByIdRepoStub
  }
}
describe('DbLoadUserByToken', () => {
  it('Should call Decrypter with correct value', async () => {
    const { sut, decrypterStub } = makeSut()
    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')
    await sut.load('encrypted_token')
    expect(decryptSpy).toHaveBeenCalledWith('encrypted_token')
  })

  it('Should return null if Decrypter returns null', async () => {
    const { sut, decrypterStub } = makeSut()
    jest.spyOn(decrypterStub, 'decrypt').mockResolvedValueOnce(null)
    const user = await sut.load('encrypted_token')
    expect(user).toBeNull()
  })

  it('Should call LoadUserById with correct value', async () => {
    const { sut, loadUserByIdRepoStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadUserByIdRepoStub, 'loadById')
    await sut.load('encrypted_token')
    expect(loadByIdSpy).toHaveBeenCalledWith(1)
  })

  it('Should return null if LoadUserById returns null', async () => {
    const { sut, loadUserByIdRepoStub } = makeSut()
    jest.spyOn(loadUserByIdRepoStub, 'loadById').mockResolvedValueOnce(null)
    const user = await sut.load('encrypted_token')
    expect(user).toBeNull()
  })

  it('Should return an user on success', async () => {
    const { sut } = makeSut()
    const user = await sut.load('encrypted_token')
    expect(user).toEqual(mockUserModel())
  })
})
