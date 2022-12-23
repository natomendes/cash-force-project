import { UserModel } from '@/domain/models/user'
import { LoadUserByToken } from '@/domain/usecases/load-user-by-token'
import { Decrypter } from '@/data/protocols/decrypter'

export class DbLoadUserByToken implements LoadUserByToken {
  constructor (private readonly decrypter: Decrypter) {}

  async load (token: string): Promise<UserModel> {
    await this.decrypter.decrypt(token)
    return null
  }
}
