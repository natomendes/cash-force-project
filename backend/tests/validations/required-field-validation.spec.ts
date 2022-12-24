import { MissingParamError } from '@/presentation/errors'
import { RequiredFieldValidation } from '@/validations'
type SutTypes = {
  sut: RequiredFieldValidation
}

const makeSut = (): SutTypes => {
  const sut = new RequiredFieldValidation('any_field')
  return {
    sut
  }
}

describe('Required Field Validation', () => {
  it('Should return MissingParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({ name: '' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })
})
