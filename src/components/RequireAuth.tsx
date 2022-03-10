import React from 'react'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useTypedSelector(state => state.auth)

  if (!isAuth) {
    return <Navigate to='/login' replace />
  }

  return children
}
