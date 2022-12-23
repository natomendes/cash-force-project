import { AuthMiddleware } from '@/presentation/middlewares'
import { makeDbLoadUserByToken } from '@/main/factories'

export const makeAuthMiddleware = (): AuthMiddleware => {
  return new AuthMiddleware(makeDbLoadUserByToken())
}
