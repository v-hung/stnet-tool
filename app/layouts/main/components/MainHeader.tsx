import { Layout, Menu } from 'antd'
import { useMemo, type ComponentProps, type FC } from 'react'
import './MainHeader.css'
import { useLocation, useNavigate } from 'react-router'
import type { MenuInfo } from 'rc-menu/lib/interface'
import { getOpenKeys, getSelectedKeys } from '~/common/utils/menu'

const { Header } = Layout

type State = ComponentProps<typeof Header>

const MainHeader: FC<State> = props => {
  const { className = '', ...rest } = props

  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuItemClick = (info: MenuInfo) => {
    navigate(info.key)
  }

  const selectedKeys = useMemo(
    () => getSelectedKeys(location.pathname),
    [location.pathname],
  )

  return (
    <Header
      {...rest}
      className={`${className} flex h-auto items-center space-x-6 bg-transparent bg-gradient-to-r from-blue-600 to-blue-500/10 px-6 py-2 leading-normal shadow-sm`}
    >
      <div className="text-lg font-semibold text-white">STnet Tools</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={selectedKeys}
        items={items}
        onClick={handleMenuItemClick}
        className="bg-transparent"
      />
    </Header>
  )
}

export default MainHeader

const items = [
  {
    key: '/',
    label: `Csv data to excel data`,
  },
  {
    key: '/transform-text',
    label: `Transform text`,
  },
]
