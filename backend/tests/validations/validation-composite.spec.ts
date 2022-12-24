import { MissingParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols'
import { ValidationComposite } from '@/validations'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (_input: object): Error {
      return null
    }
  }
  return new ValidationStub()
}

type SutTypes = {
  sut: ValidationComposite
  validationStubs: Validation[]
}

const makeSut = (): SutTypes => {
  const validationStubs = [mockValidation(), mockValidation()]
  const sut = new ValidationComposite(validationStubs)
  return {
    sut,
    validationStubs
  }
}

describe('Validation Composite', () => {
  it('Should return an error if any validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  it('Should return the first error if more than one validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new MissingParamError('first_field'))
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('second_field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('first_field'))
  })
})
