import { Routes, Route, Navigate } from 'react-router-dom'
import { Event } from '../pages/Event'
import { Login } from '../pages/Login'
import { useTypedSelector } from './../hooks/useTypedSelector'

export const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.auth)

  return isAuth ? (
    <Routes>
      <Route path='/' element={<Event />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='*'
        element={
          <main style={{ textAlign: 'center', padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  ) : (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}
