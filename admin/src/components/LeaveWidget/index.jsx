import React from "react";
import { List, Progress } from "antd";
const data = [
  {
    title: "Casual Leave",
    color: "#1cfc03",
    available: 4,
    total: 10,
  },
  {
    title: "Earned Leave",
    color: "#fcf803",
    available: 3,
    total: 10,
  },
  {
    title: "Compensatory Off",
    color: "#0394fc",
    available: 2,
    total: 10,
  },
  {
    title: "Sick Leave",
    color: "#d703fc",
    available: 1,
    total: 10,
  },
  {
    title: "Leave Without Pay",
    color: "red",
    available: 1,
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
          avatar={
            <div className="flex justify-center items-center">
              <Progress
                type="circle"
                percent={60}
                size={40}
                format={() => "5"}
                strokeColor={item.color}
              />
            </div>
          }
          title={<p>{item.title}</p>}
          description={`Available ${item.available}(days)`}
        />
      </List.Item>
    )}
  />
);
export default App;
