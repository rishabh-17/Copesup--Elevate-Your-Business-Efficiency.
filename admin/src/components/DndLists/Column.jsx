// Column.js
import React from "react";
import { useDrop } from "react-dnd";
import DraggableElement from "./DraggableElement";

const Column = ({ id, title, elements, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: "ELEMENT",
    drop: (item) => onDrop(item, id),
  }));

  return (
    <div ref={drop} className="border w-full min-h-24 p-2">
      <h3 className="text-center font-bold ">{title}</h3>
      <hr className="my-2" />
      {elements.map((element) => (
        <DraggableElement
          className="w-full h-8"
          key={element.id}
          id={element.id}
          content={element?.content || "abc"}
        />
      ))}
    </div>
  );
};

export default Column;
