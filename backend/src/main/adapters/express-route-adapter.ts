import { Controller, HttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      userId: req.userId
    }

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
