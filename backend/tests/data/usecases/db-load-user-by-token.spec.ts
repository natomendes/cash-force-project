import { mockDecrypter, mockLoadUserByIdRepo, mockUserModel } from '@/tests/helpers'
import { Decrypter, LoadUserByIdRepo } from '@/data/protocols'
import { DbLoadUserByToken } from '@/data/usecases'

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

  it('Should return null if LoadUserByIdRepo returns null', async () => {
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

  it('Should throw if LoadUserByIdRepo throws', async () => {
    const { sut, loadUserByIdRepoStub } = makeSut()
    jest.spyOn(loadUserByIdRepoStub, 'loadById').mockRejectedValueOnce(new Error())
    const promise = sut.load('encrypted_token')
    await expect(promise).rejects.toThrow()
  })
})
