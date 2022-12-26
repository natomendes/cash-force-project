import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from '@/main/routes/router'
import '@/presentation/styles/global.scss'
import { RouterProvider } from 'react-router-dom'
import ApiContext from '@/presentation/contexts/api-context'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters/current-token-adapter'

ReactDOM.createRoot(document.getElementById('main')).render(
  <ApiContext.Provider
  value={{
    saveCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }}
  >
      <RouterProvider router={router} />
  </ApiContext.Provider>
)
