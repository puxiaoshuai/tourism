import React, { useEffect } from "react";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import { Layout } from "antd";
import "./index.css";
import NewsRouter from "./NewsRouter";
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
            overflow: 'auto'
          }}
        >
          <NewsRouter />
        </Content>
      </Layout>
    </Layout>
  );
};

export default NewsSandBox;
