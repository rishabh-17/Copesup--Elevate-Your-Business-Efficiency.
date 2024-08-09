import { Button, Modal, Input } from "antd";
import React, { useState } from "react";
const App = ({ showModal, handleSave, handleCancel }) => {
  const [name, setName] = useState("");
  return (
    <>
      <Modal
        title="Basic Modal"
        open={showModal}
        onOk={() => handleSave(name)}
        onCancel={handleCancel}
      >
        <p>Please Provide name of new Shift</p>
        <Input
          type="text"
          placeholder="Enter Shift Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </>
  );
};
export default App;
