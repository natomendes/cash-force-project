import Order from '@/infra/sequelize/models/Order'
import { dbOrdersMock } from '@/tests/helpers/db-mocks'
import { OrderMySqlRepository } from '@/infra/db/mysql/order-repository'

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
  })
})
