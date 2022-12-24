import { LoadUserByEmailRepo, LoadUserByIdRepo, UserModel } from '@/data/protocols'
import User from '@/infra/sequelize/models/User'

export class UserMySqlRepository implements LoadUserByIdRepo, LoadUserByEmailRepo {
  async loadById (userId: number): Promise<UserModel> {
    const user = await User.findByPk(userId)
    if (!user) return null

    const { id, username, email, password } = user
    return { id, username, email, password }
  }

  async loadByEmail (userEmail: string): Promise<UserModel> {
    const user = await User.findOne({
      where: {
        email: userEmail
      }
    })
    if (!user) return null

    const { id, username, email, password } = user
    return { id, username, email, password }
  }
}
