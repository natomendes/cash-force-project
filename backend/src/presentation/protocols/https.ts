export interface HttpRequest {
  userId?: string
  headers?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
