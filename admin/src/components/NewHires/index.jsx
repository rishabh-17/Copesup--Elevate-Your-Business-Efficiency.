import React from "react";
import { List, Progress } from "antd";
const data = [
  {
    username: "John Brown",
    date: "2022-11-11",
    designation: "Software Engineer",
  },
  {
    username: "Will Smith",
    date: "2022-08-15",
    designation: "UI/UX Designer",
  },
  {
    username: "Sachin Tendulkar",
    date: "2022-12-25",
    designation: "Devops Engineer",
  },
  {
    username: "brock lewis",
    date: "2022-02-02",
    designation: "Product Manager",
  },
];
const App = () => (
  <List
    header={<div className="font-bold">New Hires</div>}
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
          description={item.designation}
        />
      </List.Item>
    )}
  />
);
export default App;
