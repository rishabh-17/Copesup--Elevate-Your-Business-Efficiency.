import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ShiftManagement from "./ShiftManagement.jsx";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ShiftManagement />
    </DndProvider>
  );
};

export default App;
