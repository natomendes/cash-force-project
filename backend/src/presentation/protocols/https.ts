export interface HttpRequest {
  userId?: string
  params?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
