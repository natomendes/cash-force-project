import request from 'supertest'
import app from '@/main/config/app'
import Order from '@/infra/sequelize/models/Order'
import { dbOrdersMock } from '@/tests/helpers/db-mocks'

describe('GET /orders/user', () => {
  it('Should return 200 on success', async () => {
    jest.spyOn(Order, 'findAll').mockResolvedValueOnce(dbOrdersMock as any)
    await request(app)
      .get('/orders/user')
      .send({
        userId: 1
      })
      .expect(200)
  })

  it('Should return 500 on server error', async () => {
    jest.spyOn(Order, 'findAll').mockRejectedValueOnce(new Error())
    await request(app)
      .get('/orders/user')
      .send({
        userId: 1
      })
      .expect(500)
  })
})
