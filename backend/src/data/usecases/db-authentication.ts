import { Authentication, AuthParams } from '@/domain/usecases/authentication'
import { HashComparer, LoadUserByEmailRepo } from '@/data/protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadUserByEmailRepo: LoadUserByEmailRepo,
    private readonly hashComparer: HashComparer
  ) {}

  async auth (authParam: AuthParams): Promise<string> {
    const user = await this.loadUserByEmailRepo.loadByEmail(authParam.email)
    if (!user) return null

    await this.hashComparer.compare(authParam.password, user.password)
    return null
  }
}
