import { Decrypter, Encrypter, UserModel } from '@/data/protocols'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (user: UserModel): Promise<string> {
    jwt.sign(user, this.secret)
    return null
  }

  async decrypt (token: string): Promise<number> {
    try {
      const { user } = jwt.verify(token, this.secret) as jwt.JwtPayload

      return user.id
    } catch (error) {
      return null
    }
  }
}
