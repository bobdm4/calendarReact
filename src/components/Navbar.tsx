import React, { FC } from 'react'
import { Layout, Row, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

export const Navbar: FC = () => {
  const navigate = useNavigate()
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white', margin: '0 15px' }}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item key='1' onClick={logout}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item
              key='1'
              onClick={() => {
                navigate('/login')
              }}
            >
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  )
}
