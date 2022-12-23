import { Request, Response } from 'express'
import { Controller, HttpRequest } from '@/presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = { userId: req.userId }

    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode < 300) {
      return res
        .status(httpResponse.statusCode)
        .json(httpResponse.body)
    }

    return res
      .status(httpResponse.statusCode)
      .json({ error: httpResponse.body.message })
  }
}
