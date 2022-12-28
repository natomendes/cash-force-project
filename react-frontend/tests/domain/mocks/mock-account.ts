import { AccountModel } from '@/domain/models'
import { AuthenticationParams } from '@/domain/usecases'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  id: faker.datatype.number(),
  username: faker.name.fullName(),
  email: faker.internet.email(),
  accessToken: faker.datatype.uuid()
})
