// DraggableElement.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableElement = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ELEMENT",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
      className="border h-10 m-2 rounded "
    >
      {content}
    </div>
  );
};

export default DraggableElement;
