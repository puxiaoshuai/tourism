import React, { useEffect, useState } from "react";
import { Table, Tag, Switch, Popover, Button, message, Space } from "antd";
import { useRequest } from "ahooks";
import { getUsers } from "../../../common/apis";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "用户状态",
      dataIndex: "roleState",
      key: "roleState",
      render: (r: boolean) =>
        r ? <Tag color={"green"}>启用</Tag> : <Tag color={"orange"}>关闭</Tag>
    },
    {
      title: "区域",
      dataIndex: "region",
      key: "region",
      render: (r: string) => (!!r ? r : "全球")
    },
    {
      title: "开启",
      key: "action",
      render: (text: string, record: any) => (
        <Space>
          <Button disabled={record.default} type="primary">
            删除
          </Button>
          <Button type="primary">编辑</Button>
        </Space>
      )
    }
  ];
  const { run } = useRequest(getUsers, {
    manual: false,
    onSuccess: (res: any) => {
      setUsers(res);
    }
  });
  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <Button type="primary">添加用户</Button>
      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default UserList;
