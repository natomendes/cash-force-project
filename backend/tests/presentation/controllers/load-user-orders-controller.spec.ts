import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { LoadUserOrdersController } from '@/presentation/controllers/load-user-orders-controller'
import { mockLoadUserOrders } from '../../helpers/usecases'
import { ServerError } from '@/presentation/errors'

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

  it('Should return server error if LoadUserOrders throws', async () => {
    const { sut, loadUserOrdersStub } = makeSut()
    jest.spyOn(loadUserOrdersStub, 'load').mockRejectedValueOnce(new Error())
    const httpRequest = {
      userId: 'valid_user_id'
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual({
      statusCode: 500,
      body: new ServerError()
    })
  })
})
