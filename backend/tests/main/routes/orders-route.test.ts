import request from 'supertest'
import jwt from 'jsonwebtoken'
import app from '@/main/config/app'
import Order from '@/infra/sequelize/models/Order'
import { dbOrdersMock } from '@/tests/helpers/db-mocks'
import { mockUserModel } from '@/tests/helpers/models'
import User from '@/infra/sequelize/models/User'

jest.mock('jsonwebtoken', () => ({
  verify (): jwt.JwtPayload {
    return { user: mockUserModel() }
  }
}))

describe('GET /orders/user', () => {
  it('Should return 403 on load orders without access token', async () => {
    await request(app)
      .get('/orders/user')
      .expect(403)
  })

  it('Should return 200 on success', async () => {
    jest.spyOn(Order, 'findAll').mockResolvedValueOnce(dbOrdersMock as any)
    jest.spyOn(User, 'findByPk').mockResolvedValueOnce(mockUserModel() as any)
    await request(app)
      .get('/orders/user')
      .set('x-access-token', 'any_token')
      .expect(200)
  })

  it('Should return 500 on server error', async () => {
    jest.spyOn(Order, 'findAll').mockRejectedValueOnce(new Error())
    jest.spyOn(User, 'findByPk').mockResolvedValueOnce(mockUserModel() as any)
    await request(app)
      .get('/orders/user')
      .set('x-access-token', 'any_token')
      .expect(500)
  })
})
