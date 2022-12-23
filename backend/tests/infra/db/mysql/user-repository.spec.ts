import User from '@/infra/sequelize/models/User'
import { mockUserModel } from '@/tests/helpers/models'
import { UserMySqlRepository } from '@/infra/db/mysql/user-repository'

const makeSut = (): UserMySqlRepository => {
  return new UserMySqlRepository()
}

describe('UserMySqlRepository', () => {
  describe('loadById()', () => {
    it('Should return a user on success', async () => {
      const sut = makeSut()
      jest.spyOn(User, 'findByPk').mockResolvedValueOnce(mockUserModel() as any)
      const user = await sut.loadById(1)
      expect(user).toEqual(mockUserModel())
    })

    it('Should return null if no user is found', async () => {
      const sut = makeSut()
      jest.spyOn(User, 'findByPk').mockResolvedValueOnce(null)
      const user = await sut.loadById(1)
      expect(user).toBeNull()
    })

    it('Should throw if Sequelize throws', async () => {
      const sut = makeSut()
      jest.spyOn(User, 'findByPk').mockRejectedValueOnce(new Error())
      const promise = sut.loadById(1)
      await expect(promise).rejects.toThrow()
    })
  })
})
