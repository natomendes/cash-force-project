import { DbLoadUserByToken } from '@/data/usecases/db-load-user-by-token'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter'
import { AuthMiddleware } from '@/presentation/middlewares'
import env from '@/main/config/env'
import { UserMySqlRepository } from '@/infra/db/mysql/user-repository'

export const makeAuthMiddleware = (): AuthMiddleware => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const userMySqlRepository = new UserMySqlRepository()
  const dbLoadUserByToken = new DbLoadUserByToken(jwtAdapter, userMySqlRepository)
  return new AuthMiddleware(dbLoadUserByToken)
}
