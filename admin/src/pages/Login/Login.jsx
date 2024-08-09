import React from "react";
import { Form, Button, Input, Checkbox } from "antd";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="flex flex-col lg:flex-row-reverse max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden m-auto">
        <div className="flex items-end bg-yellow-50 max-w-full lg:max-w-lg">
          <img
            className="w-full"
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <div className="flex flex-col p-8 lg:w-1/2">
          <p className="text-4xl font-bold text-gray-900 font-josefin">
            Welcome back
          </p>
          <p className="mb-6">Login to the Dashboard</p>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="space-y-6"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                LOGIN
              </Button>
            </Form.Item>

            <Form.Item>
              <Button danger type="dashed" htmlType="submit" className="w-full">
                SSO LOGIN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
