import React from 'react'
import { renderWithRouter } from '@/tests/presentation/pages/renderWithRouter'
import PrivateRoute from '@/main/proxies/private-route'
import { Route, Routes } from 'react-router-dom'
import 'jest-localstorage-mock'

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('Should redirect to /login if accessToken is empty', () => {
    renderWithRouter(
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
    expect(window.location.pathname).toBe('/login')
  })
})
