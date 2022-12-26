import React from 'react'
import { renderWithRouter } from '@/tests/presentation/pages/renderWithRouter'
import PrivateRoute from '@/main/proxies/private-route'
import { Route, Routes } from 'react-router-dom'
import 'jest-localstorage-mock'
import { RenderResult } from '@testing-library/react'

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const makeSut = (): RenderResult => {
    return renderWithRouter(
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
    )
  }

  it('Should redirect to /login if accessToken is empty', () => {
    makeSut()
    expect(window.location.pathname).toBe('/login')
  })
})
