import { UserModel } from '@/domain/models'

export interface LoadUserByToken {
  load (token: string): Promise<UserModel>
}
