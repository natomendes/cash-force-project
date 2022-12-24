import * as bcrypt from 'bcrypt'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter'

jest.mock('bcrypt', () => ({
  compare: jest.fn(async (): Promise<boolean> => await new Promise(resolve => resolve(true)))
}))

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter()
}

describe('BcryptAdapter', () => {
  describe('compare()', () => {
    it('Should call bcrypt.compare with correct values', async () => {
      const sut = makeSut()
      const compareSpy = jest.spyOn(bcrypt, 'compare')
      await sut.compare('any_password', 'hashed_password')
      expect(compareSpy).toHaveBeenCalledWith('any_password', 'hashed_password')
    })

    it('Should return true if bcrypt.compare succeeds', async () => {
      const sut = makeSut()
      const isValid = await sut.compare('any_password', 'hashed_password')
      expect(isValid).toBe(true)
    })

    it('Should throw if bcrypt.compare throws', async () => {
      const sut = makeSut()
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => { throw new Error() })
      const promise = sut.compare('any_password', 'hashed_password')
      await expect(promise).rejects.toThrow()
    })
  })
})
