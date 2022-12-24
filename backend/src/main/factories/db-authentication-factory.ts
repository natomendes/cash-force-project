import { DbAuthentication } from '@/data/usecases'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter'
import { UserMySqlRepository } from '@/infra/db/mysql'
import env from '@/main/config/env'

export const makeDbAuthentication = (): DbAuthentication => {
  const userMySqlRepository = new UserMySqlRepository()
  const bcryptAdapter = new BcryptAdapter()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(userMySqlRepository, bcryptAdapter, jwtAdapter)
}
