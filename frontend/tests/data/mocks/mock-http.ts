import { faker } from '@faker-js/faker'
import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

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

export const mockPostResquest = (): HttpPostParams => ({
  url: faker.internet.url(),
  body: faker.random.word()
})

export const mockedAxiosPostResult = {
  data: faker.random.word(),
  status: faker.datatype.number()
}
