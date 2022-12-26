import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeLoginPage } from '@/main/factories/pages/login'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={makeLoginPage({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
