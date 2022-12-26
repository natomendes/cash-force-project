import { AccountModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '@/main/factories/usecases/cache'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}
