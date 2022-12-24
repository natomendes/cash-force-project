export interface HttpRequest {
  userId?: string
  headers?: any
  body?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
