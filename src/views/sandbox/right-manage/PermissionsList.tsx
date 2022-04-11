import React, { useEffect, useState } from "react";
import { Table, Tag, Switch, Popover, Button, message } from "antd";
import { useRequest } from "ahooks";
import { getSideMenus, updateRights } from "../../../common/apis";
import { useHistory } from "react-router";

const PermissionsList = () => {
  const [menus, setMenus] = useState([]);
  const history =useHistory()
  const runUpdadePerssion = useRequest(updateRights, {
    manual: true,
    onSuccess: () => {
      message.info("菜单修改成功，请重新登录!")
      history.replace('/login')
    }
  });
  const switchChange = (r: any) => {
    r.pagepermisson = r.pagepermisson === 1 ? 0 : 1;
    setMenus([...menus]);
    if (r.grade === 1) {
      runUpdadePerssion.run(`/api/rights/${r.id}`, { pagepermisson: r.pagepermisson });
    } else {
      runUpdadePerssion.run(`/api/children/${r.id}`, { pagepermisson: r.pagepermisson });
    }
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "路由权限",
      dataIndex: "key",
      key: "key",
      render: (text: string) => <Tag color={"orange"}>{text}</Tag>
    },
    {
      title: "菜单状态",
      dataIndex: "pagepermisson",
      key: "pagepermisson",
      render: (text: string, r: any) =>
        r.pagepermisson ? <Tag color={"green"}>{"开启"}</Tag> : <Tag color={"red"}>{"关闭"}</Tag>
    },
    {
      title: "开启",
      key: "action",
      render: (text: string, record: any) => (
        <Popover
          trigger={record.pagepermisson === undefined ? "" : "click"}
          content={
            <Switch checked={record.pagepermisson === 1} onChange={() => switchChange(record)} />
          }
          title="是否开启菜单权限?"
        >
          <Button disabled={record.pagepermisson === undefined} type="primary">
            切换
          </Button>
        </Popover>
      )
    }
  ];
  const { run } = useRequest(getSideMenus, {
    manual: false,
    onSuccess: (res: any) => {
      const list = res.map((item: any) => {
        if (item?.children.length === 0) {
          return { ...item, children: "" };
        }
        return item;
      });
      setMenus(list);
    }
  });
  useEffect(() => {
    run();
  }, []);

  return <Table columns={columns} dataSource={menus} />;
};

export default PermissionsList;
