import React, { FC } from 'react'
import { Layout, Row, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const Navbar: FC = () => {
  const navigate = useNavigate()
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>User name</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item
                key='1'
                onClick={() => {
                  console.log('logout')
                }}
              >
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
