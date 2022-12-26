import 'jest-localstorage-mock'
import { faker } from '@faker-js/faker'
import { LocalStorageAdapter } from '@/infra/cache'

const makeSut = (): LocalStorageAdapter => {
  return new LocalStorageAdapter()
}

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('Should call localStorage.setItem with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.word()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })

  it('Should call localStorage.getItem with correct value', () => {
    const sut = makeSut()
    const key = faker.database.column()
    sut.get(key)
    expect(localStorage.getItem).toHaveBeenCalledWith(key)
  })
})
