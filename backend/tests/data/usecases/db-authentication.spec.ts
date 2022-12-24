import { LoadUserByEmailRepo } from '@/data/protocols'
import { mockLoadUserByEmailRepo } from '@/tests/helpers'
import { DbAuthentication } from '@/data/usecases'

type SutTypes = {
  sut: DbAuthentication
  loadUserByEmailRepoStub: LoadUserByEmailRepo
}

const makeSut = (): SutTypes => {
  const loadUserByEmailRepoStub = mockLoadUserByEmailRepo()
  const sut = new DbAuthentication(loadUserByEmailRepoStub)
  return {
    sut,
    loadUserByEmailRepoStub
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
})
