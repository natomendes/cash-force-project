import { HttpResponse } from '@/data/protocols/http'

export type HttpPostParams = {
  url: string
  body?: any
}

export interface HttpPostClient<R> {
  post (params: HttpPostParams): Promise<HttpResponse<R>>
}
