import { UserModel } from '@/domain/models'

export interface Encrypter {
  encrypt (user: UserModel): Promise<string>
}
