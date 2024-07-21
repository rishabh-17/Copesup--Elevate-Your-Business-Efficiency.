import React from "react";
import { List, Progress } from "antd";
const data = [
  {
    title: "Welcome Greetings, ...",
    date: "2022-11-11, 11:45 AM",
  },
  {
    title: "Release is phosphoned",
    date: "2022-08-15, 11:45 AM",
  },
];
const App = () => (
  <List
    header={<div className="font-bold">Announcements</div>}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item style={{ padding: "2px" }}>
        <List.Item.Meta title={<p>{item.title}</p>} description={item.date} />
      </List.Item>
    )}
  />
);
export default App;
