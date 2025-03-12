import { Layout } from 'antd'
import MainHeader from './components/MainHeader'
import MainContent from './components/MainContent'

const MainLayout = () => {
  return (
    <Layout className="min-h-screen">
      <MainHeader />
      <MainContent />
    </Layout>
  )
}

export default MainLayout
