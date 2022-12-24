import { UserModel } from '@/domain/models'

export interface LoadUserByEmailRepo {
  loadByEmail (email: string): Promise<UserModel>
}
