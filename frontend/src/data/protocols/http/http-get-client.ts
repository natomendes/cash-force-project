import { HttpResponse } from '@/data/protocols/http'

export type HttpGetParams = {
  url: string
  headers?: any
  body?: any
}

export interface HttpGetClient<R> {
  get (params: HttpGetParams): Promise<HttpResponse<R>>
}
