import { faker } from '@faker-js/faker'
import { HttpGetClient, HttpGetParams, HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<R> implements HttpPostClient<R> {
  url?: string
  body?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post ({ url, body }: HttpPostParams): Promise<HttpResponse<R>> {
    this.url = url
    this.body = body

    return this.response
  }
}

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
  url?: string
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async get ({ url, headers }: HttpGetParams): Promise<HttpResponse<R>> {
    this.url = url
    this.headers = headers

    return this.response
  }
}

export const mockPostResquest = (): HttpPostParams => ({
  url: faker.internet.url(),
  body: faker.random.word()
})

export const mockGetResquest = (): HttpGetParams => ({
  url: faker.internet.url(),
  headers: {
    'x-access-token': faker.datatype.uuid()
  }
})

export const mockedAxiosPostResult = {
  data: faker.random.word(),
  status: faker.datatype.number()
}
