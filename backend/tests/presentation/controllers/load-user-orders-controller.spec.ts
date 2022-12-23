import { LoadUserOrders } from '@/domain/usecases'
import { mockLoadUserOrders, mockOrderModelList } from '@/tests/helpers'
import { ok, serverError } from '@/presentation/helpers/http-helpers'
import { LoadUserOrdersController } from '@/presentation/controllers/load-user-orders-controller'

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
    expect(httpResponse).toEqual(serverError())
  })

  it('Should return a list of orders on success', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      userId: 'valid_user_id'
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(mockOrderModelList()))
  })
})
