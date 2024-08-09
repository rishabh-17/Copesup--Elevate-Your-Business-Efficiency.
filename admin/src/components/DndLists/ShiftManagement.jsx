// ShiftManagement.js
import React, { useState } from "react";
import Column from "./Column";
import NameModal from "./NameModal";
const ShiftManagement = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: "Day Shift",
      elements: [
        { id: 1, content: "Task 1" },
        { id: 2, content: "Task 2" },
      ],
    },
    { id: 2, title: "Night Shift", elements: [{ id: 3, content: "Task 3" }] },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleDrop = (item, columnId) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            elements: [
              ...column.elements,
              { id: item.id, content: item.content },
            ],
          };
        } else {
          return {
            ...column,
            elements: column.elements.filter(
              (element) => element.id !== item.id
            ),
          };
        }
      })
    );
  };

  const addColumn = (name) => {
    setColumns([
      ...columns,
      {
        id: columns.length + 1,
        title: name,
        elements: [],
      },
    ]);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add Column</button>
      <div className="grid grid-cols-3 gap-5 p-2">
        {columns.map((column) => (
          <Column key={column.id} {...column} onDrop={handleDrop} />
        ))}
      </div>
      <NameModal
        showModal={showModal}
        handleSave={addColumn}
        handleCancel={() => setShowModal(false)}
      />
    </div>
  );
};

export default ShiftManagement;
