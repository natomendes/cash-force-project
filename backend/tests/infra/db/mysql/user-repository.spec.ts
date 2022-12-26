import { UserMySqlRepository } from '@/infra/db/mysql'
import User from '@/infra/sequelize/models/User'
import { mockUserModel } from '@/tests/helpers'

const makeSut = (): UserMySqlRepository => {
  return new UserMySqlRepository()
}

describe('UserMySqlRepository', () => {
  describe('loadById()', () => {
    it('Should return a user on success', async () => {
      const { accessToken, ...userWithoutToken } = mockUserModel()
      const sut = makeSut()
      jest.spyOn(User, 'findByPk').mockResolvedValueOnce(userWithoutToken as any)
      const user = await sut.loadById(1)
      expect(user).toEqual(userWithoutToken)
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

  describe('loadByEmail()', () => {
    it('Should return a user on success', async () => {
      const { accessToken, ...userWithoutToken } = mockUserModel()
      const sut = makeSut()
      jest.spyOn(User, 'findOne').mockResolvedValueOnce(userWithoutToken as any)
      const user = await sut.loadByEmail('any_email@mail.com')
      expect(user).toEqual(userWithoutToken)
    })

    it('Should return null if no user is found', async () => {
      const sut = makeSut()
      jest.spyOn(User, 'findOne').mockResolvedValueOnce(null)
      const user = await sut.loadByEmail('any_email@mail.com')
      expect(user).toBeNull()
    })

    it('Should throw if Sequelize throws', async () => {
      const sut = makeSut()
      jest.spyOn(User, 'findOne').mockRejectedValueOnce(new Error())
      const promise = sut.loadByEmail('any_email@mail.com')
      await expect(promise).rejects.toThrow()
    })
  })
})
