import { Authentication, AuthParams } from '@/domain/usecases/authentication'
import { Encrypter, HashComparer, LoadUserByEmailRepo } from '@/data/protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadUserByEmailRepo: LoadUserByEmailRepo,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter
  ) {}

  async auth (authParam: AuthParams): Promise<string> {
    const user = await this.loadUserByEmailRepo.loadByEmail(authParam.email)
    if (!user) return null

    const isValid = await this.hashComparer.compare(authParam.password, user.password)
    if (!isValid) return null

    const { password, ...userWithoutPassword } = user
    return await this.encrypter.encrypt(userWithoutPassword)
  }
}
