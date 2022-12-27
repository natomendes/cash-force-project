import { makeLoginPage } from '@/main/factories/pages/login'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import React from 'react'
import { Dashboard } from '@/presentation/pages'
import PrivateRoute from '../proxies/private-route'
import { loadOrdersAdapter } from '../adapters/load-orders-adapter'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/' element={<Dashboard />} loader={loadOrdersAdapter} />
      </Route>
      <Route path='/login' element={makeLoginPage({})} />
    </>
  )
)
