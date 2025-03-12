import { Layout, Menu } from 'antd'
import type { ComponentProps, FC } from 'react'
import './MainHeader.css'

const { Header } = Layout

type State = ComponentProps<typeof Header>

const MainHeader: FC<State> = props => {
  const { className = '', ...rest } = props
  return (
    <Header
      {...rest}
      className={`${className} flex h-auto items-center space-x-6 bg-transparent bg-gradient-to-r from-blue-600 to-blue-500/10 px-6 py-2 leading-normal shadow-sm`}
    >
      <div className="text-lg font-semibold text-white">STnet Tools</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['csv-to-excel']}
        items={items}
        className="bg-transparent"
      />
    </Header>
  )
}

export default MainHeader

const items = [
  {
    key: 'csv-to-excel',
    label: `Csv data to excel data`,
  },
  {
    key: 'transform-text',
    label: `Transform text`,
  },
]
