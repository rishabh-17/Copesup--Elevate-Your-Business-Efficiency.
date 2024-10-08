import React from "react";
import { Badge, Calendar } from "antd";

const getListData = (value) => {
  let listData = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "purple",
          content: "3",
        },
        {
          type: "green",
          content: "37",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "purple",
          content: "3",
        },
        {
          type: "green",
          content: "37",
        },
        {
          type: "red",
          content: "3",
        },
        {
          type: "geekblue",
          content: "4",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "purple",
          content: "1",
        },
        {
          type: "green",
          content: "45",
        },
        {
          type: "red",
          content: "4",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const AttendenceCalendar = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge color={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};

export default function Attendence() {
  return (
    <div>
      <AttendenceCalendar />
    </div>
  );
}
