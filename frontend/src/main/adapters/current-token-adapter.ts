import { AccountModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '@/main/factories/usecases/cache'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): AccountModel => {
  const value = makeLocalStorageAdapter().get('account')
  return value ? value.user : value
}

export const clearCurrentAccountAdapter = (): void => {
  makeLocalStorageAdapter().clear('account')
}
