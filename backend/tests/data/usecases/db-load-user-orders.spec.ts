import { LoadUserOrdersRepo } from '@/data/protocols/load-user-order-repo'
import { DbLoadUserOrders } from '@/data/usecases/db-load-user-orders'
import { mockLoadUserOrdersRepo } from '@/tests/helpers/usecases'

type SutTypes = {
  sut: DbLoadUserOrders
  loadUserOrdersRepoStub: LoadUserOrdersRepo
}

const makeSut = (): SutTypes => {
  const loadUserOrdersRepoStub = mockLoadUserOrdersRepo()
  const sut = new DbLoadUserOrders(loadUserOrdersRepoStub)
  return {
    sut,
    loadUserOrdersRepoStub
  }
}

describe('DbLoadUserOrders Usecase', () => {
  it('Should call LoadUserOrdersRepo with correct value', async () => {
    const { sut, loadUserOrdersRepoStub } = makeSut()
    const loadByUserIdSpy = jest.spyOn(loadUserOrdersRepoStub, 'loadByUserId')
    await sut.load('valid_user_id')
    expect(loadByUserIdSpy).toHaveBeenCalledWith('valid_user_id')
  })

  it('Should throw if LoadUserOrdersRepo throws', async () => {
    const { sut, loadUserOrdersRepoStub } = makeSut()
    jest.spyOn(loadUserOrdersRepoStub, 'loadByUserId').mockRejectedValueOnce(new Error())
    const promise = sut.load('valid_user_id')
    await expect(promise).rejects.toThrow()
  })
})
