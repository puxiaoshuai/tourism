import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function NoPermission() {
  const history=useHistory()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={()=>history.push("/home")}>Back Home</Button>}
    />
  );
}

export default NoPermission;
