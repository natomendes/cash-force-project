import { DbLoadUserByToken } from '@/data/usecases'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter'
import { UserMySqlRepository } from '@/infra/db/mysql'
import env from '@/main/config/env'

export const makeDbLoadUserByToken = (): DbLoadUserByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const userMySqlRepository = new UserMySqlRepository()
  return new DbLoadUserByToken(jwtAdapter, userMySqlRepository)
}
