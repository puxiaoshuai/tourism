import React from 'react'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import './index.css'
const { Content } = Layout;
const NewsSandBox = () => {
  return (
    <Layout className="flex-1">
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          <Router>
            <Switch>
              <Route path="/home">
              </Route>
            </Switch>
          </Router>
        </Content>
      </Layout>

    </Layout>
  )
}

export default NewsSandBox