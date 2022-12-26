import { makeLoginPage } from '@/main/factories/pages/login'
import { ApiContext } from '@/presentation/contexts'
import { setCurrentTokenAdapter } from '@/main/adapters/current-token-adapter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        saveAccessToken: setCurrentTokenAdapter
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
