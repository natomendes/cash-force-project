import { LoginController } from '@/presentation/controllers/login-controller'
import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication } from './db-authentication-factory'

export const makeLoginController = (): LoginController => {
  return new LoginController(makeDbAuthentication(), makeLoginValidation())
}
