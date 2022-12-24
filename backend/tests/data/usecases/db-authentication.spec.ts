import { HashComparer, LoadUserByEmailRepo } from '@/data/protocols'
import { mockHashComparer, mockLoadUserByEmailRepo } from '@/tests/helpers'
import { DbAuthentication } from '@/data/usecases'

type SutTypes = {
  sut: DbAuthentication
  loadUserByEmailRepoStub: LoadUserByEmailRepo
  hashComparerStub: HashComparer
}

const makeSut = (): SutTypes => {
  const loadUserByEmailRepoStub = mockLoadUserByEmailRepo()
  const hashComparerStub = mockHashComparer()
  const sut = new DbAuthentication(loadUserByEmailRepoStub, hashComparerStub)
  return {
    sut,
    loadUserByEmailRepoStub,
    hashComparerStub
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
})
