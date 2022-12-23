import { UserModel } from '@/domain/models'

export interface LoadUserByIdRepo {
  loadById (userId: number): Promise<UserModel>
}
