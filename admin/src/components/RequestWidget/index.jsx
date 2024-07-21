import React from "react";
import { List, Progress } from "antd";
const data = [
  {
    username: "John Brown",
    date: "2022-11-11",
    reason: "Leave for visiting goa with my...",
  },
  {
    username: "Will Smith",
    date: "2022-08-15",
    reason: "Leave for visiting goa with my...",
  },
  {
    username: "Sachin Tendulkar",
    date: "2022-12-25",
    reason: "Leave for visiting goa with my...",
  },
  {
    username: "brock lewis",
    date: "2022-02-02",
    reason: "Leave for visiting goa with my...",
  },
];
const App = () => (
  <List
    header={<div className="font-bold">Leave Summary</div>}
    size="small"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item style={{ padding: "2px" }}>
        <List.Item.Meta
          title={
            <div className="flex justify-between items-center">
              <p>{item.username}</p>
              <p>{item.date}</p>
            </div>
          }
          description={item.reason}
        />
      </List.Item>
    )}
  />
);
export default App;
