import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Event } from '../pages/Event'
import { Login } from '../pages/Login'
import { RequireAuth } from './../components/RequireAuth'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route
        path='*'
        element={
          <RequireAuth>
            <Event />
          </RequireAuth>
        }
      />
    </Routes>
  )
}
