import { makeLoginPage } from '@/main/factories/pages/login'
import { ApiContext } from '@/presentation/contexts'
import { getCurrentTokenAdapter, setCurrentTokenAdapter } from '@/main/adapters/current-token-adapter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { Dashboard } from '@/presentation/pages'
import PrivateRoute from '../proxies/private-route'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        saveAccessToken: setCurrentTokenAdapter,
        getAccessToken: getCurrentTokenAdapter
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
          <Route path='/login' element={makeLoginPage({})} />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
