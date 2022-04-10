import { useRequest } from "ahooks";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getRoles } from "../../../common/apis";
import { IRole } from "../../../model/Role";
import RoleModel from "./componts/RoleModel";

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState<IRole>({ id: 0, rights: [], rileName: "", roleType: 0 });
  const runRoles = useRequest(getRoles, {
    manual: true,
    onSuccess: (res: any) => {
      console.log(res);
      setRoles(res);
    }
  });
  useEffect(() => {
    runRoles.run();
  }, []);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName"
    },
    {
      title: "roleType",
      dataIndex: "roleType",
      key: "roleType"
    },
    {
      title: "操作",
      key: "action",
      render: (text: string, record: any) => (
        <Button
          onClick={() => {
            setShowModal(true);
            setRole(record);
          }}
        >
          编辑
        </Button>
      )
    }
  ];
  const onChangeVisible = (v: boolean) => {
    setShowModal(v);
  };
  const onChangeRights = (v: IRole) => {
    setRole(v);
    const data =roles.map((item:IRole)=>(item.id === v.id ? v:item))
    setRoles(data as any)
  };
  return (
    <div>
      <Table key="roleType" columns={columns} dataSource={roles} />
      <RoleModel
        onChangeRights={onChangeRights}
        role={role}
        show={showModal}
        onChangeVisible={onChangeVisible}
      />
    </div>
  );
};

export default RoleList;
