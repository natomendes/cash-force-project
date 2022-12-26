import { LocalStorageAdapter } from '@/infra/cache'
import { setCurrentTokenAdapter } from '@/main/adapters/current-token-adapter'
import 'jest-localstorage-mock'

describe('CurrentAccessTokenAdapter', () => {
  it('Should call LocalStorageAdapter with correct values', () => {
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentTokenAdapter('any_token')
    expect(setSpy).toHaveBeenCalledWith('accessToken', 'any_token')
  })
})
