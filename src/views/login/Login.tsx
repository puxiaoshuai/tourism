import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import "./login.css";
import { loginUser } from "../../common/apis";
import { useRequest } from "ahooks";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { run } = useRequest(loginUser, {
    manual: true,
    onSuccess: (res: any) => {
      console.log("res", res);
      if (res.length > 0) {
        localStorage.setItem("token",JSON.stringify(res[0]));
        history.replace("/home");
        message.info(`登录成功,欢迎${res[0].username}回来!`)
      } else {
        message.error("账号或密码错误")
      }
    }
  });
  const onFinish = (values: any) => {
    run(
      `/api/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" h-full  bg-blue-400 ">
      <div className="logincontent bg-gray-600 m-auto justify-center">
        <Form
          className=" mt-14"
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 20, offset: 1 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 3 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
