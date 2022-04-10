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
  const [userInfo, setUserInfo] = useState({username:""})
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  useEffect(() => {
    const user =JSON.parse(localStorage.getItem('token') as string)
    setUserInfo(user)
   
  }, [])
  
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

  return (
    <Header className="bg-white">
      {collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />}
      <div className="float-right ml-4">
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Avatar size="default" icon={<UserOutlined />} />
        </Dropdown>
      </div>
      <div className="float-right"><span>欢迎<span className=' mx-1' style={{color:'#1890ff'}}>{userInfo.username}</span>回来</span></div>
    </Header>
  )
}

export default Index

