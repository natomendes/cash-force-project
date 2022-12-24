import { Decrypter, Encrypter, UserModel } from '@/data/protocols'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (user: UserModel): Promise<string> {
    return jwt.sign(user, this.secret)
  }

  async decrypt (token: string): Promise<number> {
    try {
      const { id } = jwt.verify(token, this.secret) as jwt.JwtPayload

      return id
    } catch (error) {
      return null
    }
  }
}
