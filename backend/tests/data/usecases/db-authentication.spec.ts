import { Encrypter, HashComparer, LoadUserByEmailRepo } from '@/data/protocols'
import { mockEncrypter, mockHashComparer, mockLoadUserByEmailRepo, mockUserModel } from '@/tests/helpers'
import { DbAuthentication } from '@/data/usecases'

type SutTypes = {
  sut: DbAuthentication
  loadUserByEmailRepoStub: LoadUserByEmailRepo
  hashComparerStub: HashComparer
  encrypterStub: Encrypter
}

const makeSut = (): SutTypes => {
  const loadUserByEmailRepoStub = mockLoadUserByEmailRepo()
  const hashComparerStub = mockHashComparer()
  const encrypterStub = mockEncrypter()
  const sut = new DbAuthentication(loadUserByEmailRepoStub, hashComparerStub, encrypterStub)
  return {
    sut,
    loadUserByEmailRepoStub,
    hashComparerStub,
    encrypterStub
  }
}

describe('DbAuthentication', () => {
  it('Should call LoadUserByEmailRepo with correct email', async () => {
    const { sut, loadUserByEmailRepoStub } = makeSut()
    const loadByEmailspy = jest.spyOn(loadUserByEmailRepoStub, 'loadByEmail')
    await sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    expect(loadByEmailspy).toHaveBeenCalledWith('any_email')
  })

  it('Should throw if LoadUserByEmailRepo throws', async () => {
    const { sut, loadUserByEmailRepoStub } = makeSut()
    jest.spyOn(loadUserByEmailRepoStub, 'loadByEmail')
      .mockRejectedValueOnce(new Error())
    const promise = sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should return null if LoadAccountByEmailRepository return null', async () => {
    const { sut, loadUserByEmailRepoStub } = makeSut()
    jest.spyOn(loadUserByEmailRepoStub, 'loadByEmail')
      .mockResolvedValueOnce(null)
    const accessToken = await sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    expect(accessToken).toBeNull()
  })

  it('Should call HashComparer with correct values', async () => {
    const { sut, hashComparerStub } = makeSut()
    const compareSpy = jest.spyOn(hashComparerStub, 'compare')
    await sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    expect(compareSpy).toHaveBeenCalledWith('any_password', 'hashed_password')
  })

  it('Should throw if HashComparer throws', async () => {
    const { sut, hashComparerStub } = makeSut()
    jest.spyOn(hashComparerStub, 'compare')
      .mockRejectedValueOnce(new Error())
    const promise = sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should return null if HashComparer return null', async () => {
    const { sut, hashComparerStub } = makeSut()
    jest.spyOn(hashComparerStub, 'compare')
      .mockResolvedValueOnce(null)
    const accessToken = await sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    expect(accessToken).toBeNull()
  })

  it('Should call Encrypter with correct values', async () => {
    const { sut, encrypterStub } = makeSut()
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    await sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    expect(encryptSpy).toHaveBeenCalledWith({
      id: 1,
      username: 'any_name',
      email: 'any_email@mail.com'
    })
  })

  it('Should throw if Encrypter throws', async () => {
    const { sut, encrypterStub } = makeSut()
    jest.spyOn(encrypterStub, 'encrypt')
      .mockRejectedValueOnce(new Error())
    const promise = sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should return a user on success', async () => {
    const { password, ...userWithoutPassword } = mockUserModel()
    const { sut } = makeSut()
    const user = await sut.auth({
      email: 'any_email',
      password: 'any_password'
    })
    expect(user).toEqual(userWithoutPassword)
  })
})
