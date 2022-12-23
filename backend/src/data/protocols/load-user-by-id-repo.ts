import { UserModel } from '@/domain/models/user'

export interface LoadUserByIdRepo {
  loadById (userId: number): Promise<UserModel>
}
