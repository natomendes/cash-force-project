import { HashComparer } from '@/data/protocols'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements HashComparer {
  async compare (value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash)
  }
}
