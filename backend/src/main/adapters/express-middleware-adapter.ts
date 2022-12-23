import { NextFunction, Request, Response } from 'express'
import { Controller, HttpRequest } from '@/presentation/protocols'

export const adaptMiddleware = (middleware: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }
    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode !== 200) {
      return res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message })
    }
    Object.assign(req, httpResponse.body)

    next()
  }
}
