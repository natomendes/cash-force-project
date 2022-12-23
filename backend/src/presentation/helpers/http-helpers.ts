import { ServerError } from '@/presentation/errors'
import { HttpResponse } from '@/presentation/protocols'

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
