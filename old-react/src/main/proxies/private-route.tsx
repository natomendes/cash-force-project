import React, { useContext } from 'react'
import { ApiContext } from '@/presentation/contexts'
import { Navigate, useOutlet } from 'react-router-dom'

const PrivateRoute = (): JSX.Element => {
  const { getCurrentAccount } = useContext(ApiContext)
  const outlet = useOutlet()
  const account = getCurrentAccount()
  return account ? outlet : <Navigate to="/login" replace={true} />
}

export default PrivateRoute
