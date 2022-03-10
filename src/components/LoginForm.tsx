import React, { FC, useEffect, useState } from 'react'
import { Input, Form, Button } from 'antd'
import { rules } from './../utils/rules'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/redusers/auth/action-creators'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import { useActions } from './../hooks/useActions'

export const LoginForm: FC = () => {
  const { login } = useActions()
  const navigate = useNavigate()
  const { isAuth, error, isLoading } = useTypedSelector(state => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true })
    }
  }, [isAuth])

  const submit = () => {
    login(username, password)
  }
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item label='Username' name='username' rules={[rules.required('Please input your username!')]}>
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label='Password' name='password' rules={[rules.required('Please input your password!')]}>
        <Input value={password} onChange={e => setPassword(e.target.value)} type={'password'} />
      </Form.Item>
      <Button type='primary' htmlType='submit' loading={isLoading}>
        Login
      </Button>
    </Form>
  )
}
