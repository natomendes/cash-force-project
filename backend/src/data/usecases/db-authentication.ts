import { Authentication, AuthParams } from '@/domain/usecases/authentication'
import { LoadUserByEmailRepo } from '@/data/protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadUserByEmailRepo: LoadUserByEmailRepo
  ) {}

  async auth (authParam: AuthParams): Promise<string> {
    await this.loadUserByEmailRepo.loadByEmail(authParam.email)
    return null
  }
}
