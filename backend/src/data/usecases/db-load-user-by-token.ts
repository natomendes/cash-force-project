import { UserModel } from '@/domain/models/user'
import { LoadUserByToken } from '@/domain/usecases/load-user-by-token'
import { Decrypter } from '@/data/protocols/decrypter'
import { LoadUserByIdRepo } from '../protocols/load-user-by-id-repo'

export class DbLoadUserByToken implements LoadUserByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadUserById: LoadUserByIdRepo
  ) {}

  async load (token: string): Promise<UserModel> {
    const userId = await this.decrypter.decrypt(token)
    if (!userId) return null

    return await this.loadUserById.loadById(userId)
  }
}
