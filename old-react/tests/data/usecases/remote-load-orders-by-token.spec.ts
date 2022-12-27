import { OrderModel } from '@/domain/models'
import { RemoteLoadOrdersByToken } from '@/data/usecases'
import { HttpGetClientSpy } from '@/tests/data/mocks'
import { faker } from '@faker-js/faker'
import { HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { mockOrderList } from '../../domain/mocks/mock-order'

interface SutTypes {
  sut: RemoteLoadOrdersByToken
  httpGetClientSpy: HttpGetClientSpy<OrderModel[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<OrderModel[]>()
  const sut = new RemoteLoadOrdersByToken(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadOrdersByToken', () => {
  it('Should call HttpGetClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    const accessToken = faker.datatype.uuid()
    await sut.loadAll(accessToken)
    expect(httpGetClientSpy.url).toBe(url)
    expect(httpGetClientSpy.headers).toEqual({
      'x-access-token': accessToken
    })
  })

  it('Should throw UnexpectedError if HttpGetClient returns server error', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.loadAll(faker.datatype.uuid())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('Should return a list of orders if HttpGetClient returns ok', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockOrderList()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const orders = await sut.loadAll(faker.datatype.uuid())
    expect(orders).toEqual(httpResult)
  })
})
