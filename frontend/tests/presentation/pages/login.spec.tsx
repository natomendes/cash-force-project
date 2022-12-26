import React from 'react'
import { faker } from '@faker-js/faker'
import { Login } from '@/presentation/pages'
import { ApiContext } from '@/presentation/contexts'
import { ValidationStub, AuthenticationSpy } from '@/tests/presentation/mocks'
import { cleanup, fireEvent, RenderResult, waitFor } from '@testing-library/react'
import * as Helper from '@/tests/presentation/pages/test-helpers'
import { InvalidCredentialsError } from '@/domain/errors'
import { renderWithRouter } from '@/tests/presentation/pages/renderWithRouter'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
  authenticationSpy: AuthenticationSpy
  saveAccessTokenMock: (accessToken: string) => void
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  validationStub.errorMessage = params?.validationError
  const saveAccessTokenMock = jest.fn()
  const sut = renderWithRouter(
    <ApiContext.Provider value={{ saveAccessToken: saveAccessTokenMock }}>
      <Login
        validation={validationStub}
        authentication={authenticationSpy}
      />
    </ApiContext.Provider>, { route: '/login' }
  )
  return {
    sut,
    validationStub,
    authenticationSpy,
    saveAccessTokenMock
  }
}

describe('Login Page', () => {
  describe('Initial State', () => {
    afterEach(cleanup)
    it('Should not render Spinner component on start', () => {
      const { sut } = makeSut({ validationError: faker.random.words() })
      Helper.checkElementNotExists(sut, 'spinner')
    })

    it('Should not render error message span component on start', () => {
      const { sut } = makeSut({ validationError: faker.random.words() })
      Helper.checkElementNotExists(sut, 'error-message-span')
    })

    it('Should have submit button disable on start', () => {
      const { sut } = makeSut({ validationError: faker.random.words() })
      Helper.checkButtonIsDisabled(sut, 'Entrar', true)
    })

    it('Should have email status title = Validation.errorMessage and text content "🔴" on start', () => {
      const { sut, validationStub } = makeSut({ validationError: faker.random.words() })
      Helper.checkFieldStatus(sut, 'email', validationStub.errorMessage)
    })

    it('Should have password status title "required field" and text content "🔴" on start', () => {
      const { sut, validationStub } = makeSut({ validationError: faker.random.words() })
      Helper.checkFieldStatus(sut, 'password', validationStub.errorMessage)
    })

    it('Should have inputs as read only on start', () => {
      const { sut } = makeSut({ validationError: faker.random.words() })
      const emailInput = sut.getByTestId('email')
      expect(emailInput).toHaveProperty('readOnly', true)
    })
  })
  describe('Component Flow', () => {
    afterEach(cleanup)
    it('Should have inputs as read only false on focus', () => {
      const { sut } = makeSut({ validationError: faker.random.words() })
      const emailInput = sut.getByTestId('email')
      fireEvent.focus(emailInput)
      expect(emailInput).toHaveProperty('readOnly', false)
    })

    it('Should show email status error if Validation fails', () => {
      const { sut, validationStub } = makeSut({ validationError: faker.random.words() })
      Helper.populateInputField(sut, 'email')
      Helper.checkFieldStatus(sut, 'email', validationStub.errorMessage)
    })

    it('Should set focus to input when label input is clicked', () => {
      const { sut } = makeSut({ validationError: faker.random.words() })
      const emailInputLabel = sut.getByTestId('email-label')
      const emailInput = sut.getByTestId('email')
      fireEvent.click(emailInputLabel)
      expect(emailInput).toEqual(window.document.activeElement)
    })

    it('Should show password status error if Validation fails', () => {
      const { sut, validationStub } = makeSut({ validationError: faker.random.words() })
      Helper.populateInputField(sut, 'password')
      Helper.checkFieldStatus(sut, 'password', validationStub.errorMessage)
    })

    it('Should show email status ok if Validation succeeds', () => {
      const { sut } = makeSut()
      Helper.populateInputField(sut, 'email')
      Helper.checkFieldStatus(sut, 'email')
    })

    it('Should show password status ok if Validation succeeds', () => {
      const { sut } = makeSut()
      Helper.populateInputField(sut, 'password')
      Helper.checkFieldStatus(sut, 'password')
    })

    it('Should enabled submit button if form is valid', () => {
      const { sut } = makeSut()
      Helper.populateInputField(sut, 'email')
      Helper.populateInputField(sut, 'password')
      Helper.checkButtonIsDisabled(sut, 'Entrar', false)
    })

    it('Should show spinner on submit', async () => {
      const { sut, saveAccessTokenMock, authenticationSpy } = makeSut()
      Helper.simulateLoginSubmit(sut)
      await waitFor(() => {
        Helper.checkElementExists(sut, 'spinner')
        Helper.awaitSubmitAsyncProcess(saveAccessTokenMock, authenticationSpy)
      })
    })

    it('Should call Authentication with correct values', async () => {
      const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
      const email = faker.internet.email()
      const password = faker.internet.password()
      Helper.simulateLoginSubmit(sut, email, password)
      await waitFor(() => {
        expect(authenticationSpy.params).toEqual({
          email,
          password
        })
        Helper.awaitSubmitAsyncProcess(saveAccessTokenMock, authenticationSpy)
      })
    })

    it('Should call Authentication only once', async () => {
      const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
      Helper.simulateLoginSubmit(sut)
      Helper.simulateLoginSubmit(sut)
      await waitFor(() => {
        Helper.awaitSubmitAsyncProcess(saveAccessTokenMock, authenticationSpy)
      })
      expect(authenticationSpy.callsCount).toBe(1)
    })

    it('Should not call Authentication if form is invalid', () => {
      const { sut, validationStub, authenticationSpy } = makeSut()
      validationStub.errorMessage = faker.random.words()
      Helper.populateInputField(sut, 'email')
      fireEvent.submit(sut.getByRole('form'))
      expect(authenticationSpy.callsCount).toBe(0)
    })

    it('Should present error if Authentication fails', async () => {
      const { sut, authenticationSpy } = makeSut()
      const error = new InvalidCredentialsError()
      jest.spyOn(authenticationSpy, 'auth')
        .mockRejectedValueOnce(error)
      Helper.simulateLoginSubmit(sut)
      await waitFor(() => {
        Helper.checkElementTextContent(sut, 'error-message-span', error.message)
        Helper.checkElementNotExists(sut, 'spinner')
      })
    })

    it('Should call SaveAccessToken on success', async () => {
      const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
      Helper.simulateLoginSubmit(sut)
      await waitFor(async () => {
        Helper.awaitSubmitAsyncProcess(saveAccessTokenMock, authenticationSpy)
      })
    })

    it('Should go to main page on success', async () => {
      const { sut, saveAccessTokenMock, authenticationSpy } = makeSut()
      Helper.simulateLoginSubmit(sut)
      await waitFor(() => {
        Helper.awaitSubmitAsyncProcess(saveAccessTokenMock, authenticationSpy)
      })
    })
  })
})
