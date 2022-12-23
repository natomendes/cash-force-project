import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { LoadUserOrdersController } from '@/presentation/controllers/load-user-orders-controller'
import { mockLoadUserOrders } from '../../helpers/usecases'

type SutTypes = {
  sut: LoadUserOrdersController
  loadUserOrdersStub: LoadUserOrders
}

const makeSut = (): SutTypes => {
  const loadUserOrdersStub = mockLoadUserOrders()
  const sut = new LoadUserOrdersController(loadUserOrdersStub)
  return {
    sut,
    loadUserOrdersStub
  }
}

describe('LoadUserOrdersController', () => {
  it('Should call LoadUserOrders with correct value', async () => {
    const { sut, loadUserOrdersStub } = makeSut()
    const loadSpy = jest.spyOn(loadUserOrdersStub, 'load')
    const httpRequest = {
      userId: 'valid_user_id'
    }
    await sut.handle(httpRequest)
    expect(loadSpy).toHaveBeenCalledWith('valid_user_id')
  })
})
