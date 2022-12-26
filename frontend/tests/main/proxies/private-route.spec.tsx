import { renderWithRouter } from '@/tests/presentation/pages/renderWithRouter'
import { ApiContext } from '@/presentation/contexts'
import PrivateRoute from '@/main/proxies/private-route'
import { Route, Routes } from 'react-router-dom'
import { RenderResult } from '@testing-library/react'
import 'jest-localstorage-mock'
import React from 'react'

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const makeSut = (accessToken = 'any_token'): RenderResult => {
    return renderWithRouter(
      <ApiContext.Provider value={{ getAccessToken: () => accessToken }} >
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <div>Private Route Mock</div>
            </PrivateRoute>
          } />
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
