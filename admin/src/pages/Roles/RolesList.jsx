import React from "react";
import { Collapse } from "antd";
import { Form, Checkbox } from "antd";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Permissions = () => {
  return (
    <div>
      <Form.Item name="disabled">
        <div>
          <Checkbox>Read</Checkbox>
        </div>
        <div>
          <Checkbox>Edit</Checkbox>
        </div>
        <div>
          <Checkbox>Add</Checkbox>
        </div>
        <div>
          <Checkbox>Delete</Checkbox>
        </div>
      </Form.Item>
    </div>
  );
};

const itemsNest = [
  {
    key: "1",
    label: <h2 className="font-bold">Tasks</h2>,
    children: <Permissions />,
  },
  {
    key: "1",
    label: <h2 className="font-bold">Payroll</h2>,
    children: <Permissions />,
  },
  {
    key: "1",
    label: <h2 className="font-bold">Reports</h2>,
    children: <Permissions />,
  },
];
const items = [
  {
    key: "1",
    label: <h2 className="font-bold">System Admin</h2>,
    children: <p>System Admin Have All Permissions</p>,
  },
  {
    key: "2",
    label: <h2 className="font-bold">Supervisor</h2>,
    children: <Collapse defaultActiveKey="2" items={itemsNest} />,
  },
  {
    key: "3",
    label: <h2 className="font-bold">Agents</h2>,
    children: <Collapse defaultActiveKey="2" items={itemsNest} />,
  },
];
const Roles = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return <Collapse onChange={onChange} items={items} />;
};

export default function RolesList() {
  return (
    <div>
      <Roles />
      <FloatButton
        icon={<PlusOutlined />}
        tooltip={<div>Add Roles</div>}
        onClick={() => {}}
      />
    </div>
  );
}
