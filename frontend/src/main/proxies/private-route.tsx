import React, { useContext } from 'react'
import { ApiContext } from '@/presentation/contexts'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const PrivateRoute = ({ children }: Props): JSX.Element => {
  const { getAccessToken } = useContext(ApiContext)
  const accessToken = getAccessToken()
  return accessToken ? children : <Navigate to="/login" />
}

export default PrivateRoute
