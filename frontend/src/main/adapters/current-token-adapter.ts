import { makeLocalStorageAdapter } from '@/main/factories/usecases/cache'

export const setCurrentTokenAdapter = (accessToken: string): void => {
  makeLocalStorageAdapter().set('accessToken', accessToken)
}
