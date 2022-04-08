import React, { useEffect, useState } from 'react'
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  UserOutlined
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import {useRequest} from 'ahooks'
import axios from 'axios';
import { getSideMenus } from '../../../common/apis';
const { SubMenu } = Menu;
const { Header } = Layout;
const Index = () => {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          个人信息
        </a>
      </Menu.Item>
      <Menu.Item danger>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    
   
  }, [])
  const { loading, run } = useRequest(getSideMenus, {
    manual: true,
    onSuccess:(res=>{
      console.log("res",res);
      
    })
  });
  useEffect(() => {
    run()
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

