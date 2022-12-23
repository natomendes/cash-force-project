import { OrderModel } from '@/domain/models/order'
import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { LoadUserOrdersController } from '@/presentation/controllers/load-user-orders-controller'

const mockLoadUserOrders = (): LoadUserOrders => {
  class LoadUserOrdersStub implements LoadUserOrders {
    async load (_userId: string): Promise<OrderModel> {
      return {
        id: 1,
        orderNumber: 'any_order_number',
        buyer: { id: 1, name: 'any_buyer' },
        provider: { id: 2, name: 'any_provider' },
        emissionDate: 'any_date',
        value: 'any_value',
        orderStatusBuyer: 'any_status'
      }
    }
  }
  return new LoadUserOrdersStub()
}

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
    expect(loadSpy).toHaveBeenCalledWith('valid_user_id'
    )
  })
})
