import { LocalStorageAdapter } from '@/infra/cache'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters/current-token-adapter'
import 'jest-localstorage-mock'
import { mockAccountModel } from '../../domain/mocks'

describe('CurrentAccessTokenAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('Should call LocalStorageAdapter.set with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
  })

  it('Should call LocalStorageAdapter.get with correct value', () => {
    const getSpy = jest.spyOn(LocalStorageAdapter.prototype, 'get')
    getCurrentAccountAdapter()
    expect(getSpy).toHaveBeenCalledWith('account')
  })

  it('Should return an account on LocalStorageAdapter.get success', () => {
    const account = mockAccountModel()
    jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce(account)
    const accessToken = getCurrentAccountAdapter()
    expect(accessToken).toBe(account)
  })
})
