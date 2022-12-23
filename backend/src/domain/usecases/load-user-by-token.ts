import { UserModel } from '@/domain/models/user'

export interface LoadUserByToken {
  load (token: string): Promise<UserModel>
}
