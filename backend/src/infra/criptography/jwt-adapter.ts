import jwt from 'jsonwebtoken'
import { Decrypter } from '@/data/protocols/decrypter'

export class JwtAdapter implements Decrypter {
  constructor (private readonly secret: string) {}

  async decrypt (token: string): Promise<number> {
    try {
      const { user } = jwt.verify(token, this.secret) as jwt.JwtPayload

      return user.id
    } catch (error) {
      return null
    }
  }
}