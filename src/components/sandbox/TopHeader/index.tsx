import React, { useEffect, useState } from 'react'
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  UserOutlined
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;
const Index = () => {
  const history =useHistory()
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const menu = (
    <Menu>
      <Menu.Item>
        个人信息
      </Menu.Item>
      <Menu.Item danger onClick={()=>{
        localStorage.removeItem("toekn")
        history.replace('/login')
      }}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {


  }, [])
  return (
    <Header className="bg-white">
      {collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />}
      <div className="float-right ml-4">
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Avatar size="default" icon={<UserOutlined />} />
        </Dropdown>
      </div>
      <div className="float-right"><span>欢迎蒲小帅回来</span></div>
    </Header>
  )
}

export default Index

