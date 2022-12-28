import { renderWithRouter } from '@/tests/presentation/pages/renderWithRouter'
import { ApiContext } from '@/presentation/contexts'
import PrivateRoute from '@/main/proxies/private-route'
import { Route, Routes } from 'react-router-dom'
import { RenderResult } from '@testing-library/react'
import 'jest-localstorage-mock'
import React from 'react'
import { mockAccountModel } from '../../domain/mocks'

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const makeSut = (account = mockAccountModel()): RenderResult => {
    return renderWithRouter(
      <ApiContext.Provider value={{ getCurrentAccount: () => account }} >
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={
              <div>Teste Componente</div>
            } />
          </Route>
          <Route path="/login" element={
            <div>Login Mock</div>
          }/>
        </Routes>
      </ApiContext.Provider>
    )
  }

  it('Should redirect to /login if accessToken is empty', () => {
    makeSut(null)
    expect(window.location.pathname).toBe('/login')
  })

  it('Should go to correct path if accessToken is found', () => {
    makeSut()
    expect(window.location.pathname).toBe('/')
  })
})
