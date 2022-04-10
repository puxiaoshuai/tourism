import React, { useState, useEffect, memo } from "react";
import { Layout, Menu, Image } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { IMenu } from "../../../model/sideMenu";
import { useRequest } from "ahooks";
import { getSideMenus } from "../../../common/apis";
import { useHistory, useLocation } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;
const Index = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [menus, setMenus] = useState([]);
  const [pathName, setPathName] = useState("");
  const checkPagePermission = (item: number) => {
    return item;
  };
  // const selectKeys=[props.location.pathname]
  useEffect(() => {
    console.log("xx", location);
    setPathName(location.pathname);
  }, [location]);

  const openKeys = ["/" + location.pathname.split("/")[1]];
  const renderMenu = (menu: any) => {
    return menu?.map((item: IMenu) => {
      if (item?.children && item?.children.length > 0 && checkPagePermission(item.pagepermisson)) {
        return (
          <SubMenu key={item.key} icon={<UserOutlined />} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        checkPagePermission(item.pagepermisson) && (
          <Menu.Item
            icon={<UserOutlined />}
            key={item.key}
            title={item.title}
            onClick={() => {
              console.log("history", history);
              history.push(item.key);
            }}
          >
            {item.title}
          </Menu.Item>
        )
      );
    });
  };
  const { loading, run } = useRequest(getSideMenus, {
    manual: false,
    onSuccess: (res: any) => {
      setMenus(res);
    }
  });
  useEffect(() => {
    run();
  }, []);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="flex max-h-full flex-col">
        <div className=" m-auto  w-50 h-33 ">
          <Image
            src="https://p1-tt.byteimg.com/origin/pgc-image/a0fb108768554e918084fde24529ad99?from=pc"
          />
        </div>
        <div className="flex-1 overflow-auto">
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathName]}
            defaultOpenKeys={openKeys}
            className="h-full"
          >
            {renderMenu(menus)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
};

export default memo(Index);
