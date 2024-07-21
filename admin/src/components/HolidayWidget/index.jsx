import React from "react";
import { List } from "antd";
const data = [
  {
    title: "Diwali",
    date: "2022-11-11",
    day: "Friday",
  },
  {
    title: "Holi",
    date: "2022-08-15",
    day: "Friday",
  },
  {
    title: "Christmas",
    date: "2022-12-25",
    day: "Monday",
  },
  {
    title: "Ganesh Chaturthi",
    date: "2022-02-02",
    day: "Sunday",
  },
];
const App = () => (
  <List
    header={<div className="font-bold">Upcoming Holidays</div>}
    size="small"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item style={{ padding: "2px" }}>
        <List.Item.Meta
          title={
            <div className="flex justify-between items-center">
              <p>{item.title}</p>
              <div className="flex flex-col items-end gap-0">
                <p>{item.date}</p>
                <p className="text-xs text-gray-600">{item.day}</p>
              </div>
            </div>
          }
        />
      </List.Item>
    )}
  />
);
export default App;
