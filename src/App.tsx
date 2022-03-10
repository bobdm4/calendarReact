import { Navbar } from './components/Navbar'
import { AppRouter } from './router/AppRouter'
import { Layout } from 'antd'
import { FC } from 'react'
import './App.css'

export const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
