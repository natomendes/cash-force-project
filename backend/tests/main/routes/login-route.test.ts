import { mockUserModel } from '@/tests/helpers'
import User from '@/infra/sequelize/models/User'
import app from '@/main/config/app'
import request from 'supertest'

jest.mock('bcrypt', () => ({
  compare: jest.fn(async (): Promise<boolean> => await new Promise(resolve => resolve(true)))
}))

describe('POST /login', () => {
  it('Should return 200 on login', async () => {
    jest.spyOn(User, 'findOne').mockResolvedValueOnce(mockUserModel() as any)
    await request(app)
      .post('/login')
      .send({
        email: 'any_email@mail.com',
        password: '123456'
      })
      .expect(200)
  })
})
