import { useRequest } from "ahooks";
import { message, Modal, Tree } from "antd";
import React, { useEffect, useState } from "react";
import { getSideMenus, updateRoles } from "../../../../common/apis";
import { IRole } from "../../../../model/Role";
interface Iprops {
  show: boolean;
  onChangeVisible: (v: boolean) => void;
  role: IRole;
  onChangeRights: (role: IRole) => void;
}
const RoleModel: React.FC<Iprops> = (props) => {
  const { show, role, onChangeVisible, onChangeRights } = props;
  const [treeData, setTreeData] = useState([]);
  const runUpdadeRoles = useRequest(updateRoles, {
    manual: true,
    onSuccess: (res: any) => {
      onChangeRights({ ...role, rights: res.rights });
      message.info("修改成功")
    }
  });
  const handleOk = () => {
    onChangeVisible(false);
    runUpdadeRoles.run(`/api/roles/${role.id}`, { rights: role.rights });
  };
  const handleCancel = () => {
    onChangeVisible(false);
  };

  const { loading, run } = useRequest(getSideMenus, {
    manual: false,
    onSuccess: (res: any) => {
      setTreeData(res);
    }
  });
  useEffect(() => {
    run();
  }, []);

  const onCheck = (checkedKeys: any, info: any) => {
    onChangeRights({ ...role, rights: checkedKeys });
  };
  return (
    <Modal title="拥有权限" visible={show} onOk={handleOk} onCancel={handleCancel}>
      <Tree
        checkable
        autoExpandParent={true}
        checkedKeys={role.rights}
        onCheck={onCheck}
        treeData={treeData}
      />
    </Modal>
  );
};

export default RoleModel;
