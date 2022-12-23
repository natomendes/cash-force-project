import { UserModel } from '@/domain/models'
import { LoadUserByToken } from '@/domain/usecases'
import { Decrypter, LoadUserByIdRepo } from '@/data/protocols'

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
