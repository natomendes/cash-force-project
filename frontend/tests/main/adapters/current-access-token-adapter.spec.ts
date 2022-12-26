import { LocalStorageAdapter } from '@/infra/cache'
import { setCurrentTokenAdapter, getCurrentTokenAdapter } from '@/main/adapters/current-token-adapter'
import 'jest-localstorage-mock'

describe('CurrentAccessTokenAdapter', () => {
  it('Should call LocalStorageAdapter.set with correct values', () => {
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentTokenAdapter('any_token')
    expect(setSpy).toHaveBeenCalledWith('accessToken', 'any_token')
  })

  it('Should call LocalStorageAdapter.get with correct value', () => {
    const getSpy = jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce('any_token')
    getCurrentTokenAdapter()
    expect(getSpy).toHaveBeenCalledWith('accessToken')
  })

  it('Should return an accessToken on LocalStorageAdapter.get success', () => {
    jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce('any_token')
    const accessToken = getCurrentTokenAdapter()
    expect(accessToken).toBe('any_token')
  })
})
