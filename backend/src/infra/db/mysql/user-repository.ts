import { LoadUserByIdRepo, UserModel } from '@/data/protocols'
import User from '@/infra/sequelize/models/User'

export class UserMySqlRepository implements LoadUserByIdRepo {
  async loadById (userId: number): Promise<UserModel> {
    const user = await User.findByPk(userId)
    if (!user) return null

    const { id, username, email } = user
    return { id, username, email }
  }
}
