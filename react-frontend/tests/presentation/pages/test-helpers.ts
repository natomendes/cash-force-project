import { faker } from '@faker-js/faker'
import { RenderResult, fireEvent } from '@testing-library/react'
import { AuthenticationSpy } from '@/tests/presentation/mocks'
import { AccountModel } from '@/domain/models'

export const populateInputField = (sut: RenderResult, fieldName: string, value = faker.random.word()): void => {
  const emailInput = sut.getByTestId(fieldName)
  fireEvent.input(emailInput, { target: { value } })
}

export const simulateLoginSubmit = (sut: RenderResult, email = faker.internet.email(), password = faker.internet.password()): void => {
  populateInputField(sut, 'email', email)
  populateInputField(sut, 'password', password)
  const form = sut.getByRole('form')
  fireEvent.submit(form)
}

export const checkFieldStatus = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || `${fieldName} válido`)
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const checkButtonIsDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean): void => {
  const button = sut.getByRole('button', { name: fieldName })
  expect(button).toHaveProperty('disabled', isDisabled)
}

export const checkElementExists = (sut: RenderResult, fieldName: string): void => {
  expect(sut.getByTestId(fieldName)).toBeDefined()
}

export const checkElementNotExists = (sut: RenderResult, fieldName: string): void => {
  expect(sut.queryByTestId(fieldName)).toBeNull()
}

export const checkElementTextContent = (sut: RenderResult, fieldName: string, text: string): void => {
  const element = sut.queryByTestId(fieldName)
  expect(element.textContent).toBe(text)
}

export const awaitSubmitAsyncProcess = (
  saveCurrentAccountMock: (account: AccountModel) => void,
  authenticationSpy: AuthenticationSpy
): void => {
  expect(saveCurrentAccountMock).toHaveBeenCalledWith(authenticationSpy.account)
  expect(window.location.pathname).toBe('/')
}
