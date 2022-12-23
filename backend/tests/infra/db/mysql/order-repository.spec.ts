import { OrderMySqlRepository } from '@/infra/db/mysql'
import Order from '@/infra/sequelize/models/Order'
import { dbOrdersMock } from '@/tests/helpers'

const makeSut = (): OrderMySqlRepository => {
  return new OrderMySqlRepository()
}

describe('OrderMySqlRepository', () => {
  describe('loadByUserId()', () => {
    it('Should return a list of orders on success', async () => {
      const sut = makeSut()
      jest.spyOn(Order, 'findAll').mockResolvedValueOnce(dbOrdersMock as any)
      const orders = await sut.loadByUserId('valid_user_id')
      expect(orders).toEqual(dbOrdersMock)
    })

    it('Should throw if Sequelize throws', async () => {
      const sut = makeSut()
      jest.spyOn(Order, 'findAll').mockRejectedValueOnce(new Error())
      const promise = sut.loadByUserId('valid_user_id')
      await expect(promise).rejects.toThrow()
    })
  })
})
