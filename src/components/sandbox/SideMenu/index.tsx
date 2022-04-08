import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined, LaptopOutlined, NotificationOutlined
} from '@ant-design/icons';
import { IMenu } from '../../../model/sideMenu';
import { useRequest } from 'ahooks';
import { getSideMenus } from '../../../common/apis';
const { Sider } = Layout;
const { SubMenu } = Menu;
const Index = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [menus, setMenus] = useState([])
  const renderMenu = (menu: any) => {
    return menu?.map((item: IMenu) => {
      if (item?.children && item?.children.length > 0) {
        return <SubMenu key={item.key} icon={<UserOutlined />} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      } else {
        return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
      }
    })
  }
  const { loading } = useRequest(getSideMenus, {
    manual: false,
    onSuccess: ((res: any) => {
      setMenus(res)
    })
  });
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        {renderMenu(menus)}
      </Menu>
    </Sider>
  )
}

export default Index
