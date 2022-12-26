import React from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const PrivateRoute = ({ children }: Props): JSX.Element => {
  return (
      <Navigate to="/login" />
  )
}

export default PrivateRoute
