import React from "react";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "./index.css";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import PermissionsList from "./right-manage/PermissionsList";
import NoPermission from "../nopermission/NoPermission";
const { Content } = Layout;
const NewsSandBox = () => {
  return (
    <Layout className="flex-1">
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflow:'auto'
          }}
        >
          <Switch>
            <Route
              path="/home"
              render={() => {
                return <Home />;
              }}
            ></Route>
            <Route
              path="/user-manage/list"
              render={() => {
                return <UserList />;
              }}
            ></Route>
            <Route path="/right-manage/role/list/">
              <RoleList />
            </Route>
            <Route path="/right-manage/right/list">
              <PermissionsList />
            </Route>
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="*">
              <NoPermission />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NewsSandBox;
