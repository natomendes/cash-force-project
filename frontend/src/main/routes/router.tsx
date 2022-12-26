import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeLoginPage } from '@/main/factories/pages/login'
import { ApiContext } from '@/presentation/contexts'
import { makeLocalStorageAdapter } from '@/main/factories/usecases/cache'

const setAccessTokenAdapter = (accessToken: string): void => {
  makeLocalStorageAdapter().set('accessToken', accessToken)
}

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        saveAccessToken: setAccessTokenAdapter
      }}
    >
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={makeLoginPage({})} />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
