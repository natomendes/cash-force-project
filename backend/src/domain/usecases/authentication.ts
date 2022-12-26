import { UserModel } from '@/domain/models'

export type AuthParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (authParam: AuthParams): Promise<UserModel>
}
