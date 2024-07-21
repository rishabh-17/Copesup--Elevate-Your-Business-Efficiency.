import React from "react";
import { Space, Table, Tag } from "antd";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Dates",
    dataIndex: "dates",
    key: "dates",
  },
  {
    title: "Reason",
    dataIndex: "reason",
    key: "reason",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = "warning";
          if (tag === "Accepted") {
            color = "success";
          }
          if (tag === "Rejected") {
            color = "error";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>View</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    dates: "2022-04-01 - 2022-04-15",
    reason: "To visit Goa",
    status: ["Rejected"],
  },
  {
    key: "2",
    name: "Jim Green",
    dates: "2022-04-01 - 2022-04-15",
    reason: "For marrige",
    status: ["Accepted"],
  },
  {
    key: "3",
    name: "Joe Black",
    dates: "2022-04-01 - 2022-04-15",
    reason: "To visit parents",
    status: ["Pending"],
  },
];
export default function LeavesRequests() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <FloatButton
        icon={<PlusOutlined />}
        tooltip={<div>Add User</div>}
        onClick={() => {}}
      />
    </div>
  );
}
