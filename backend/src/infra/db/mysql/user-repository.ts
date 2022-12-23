import { LoadUserByIdRepo } from '@/data/protocols/load-user-by-id-repo'
import { UserModel } from '@/domain/models/user'
import User from '@/infra/sequelize/models/User'

export class UserMySqlRepository implements LoadUserByIdRepo {
  async loadById (userId: number): Promise<UserModel> {
    const user = await User.findByPk(userId, {
      include: ['id', 'name', 'email']
    })

    return user
  }
}
