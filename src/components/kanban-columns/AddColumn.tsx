import React, { useState } from "react";
import Model from "../common/Model";
import ColumnForm from "./ColumnForm";
import { Plus } from "@mynaui/icons-react";
import { Button } from "../ui/Button";

const AddColumn: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleAddColumn = (name: string) => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="flex justify-center items-center gap-3"
        onClick={() => setOpen(true)}
      >
        <Plus />
        <span>Add Column</span>
      </Button>
      <Model open={open} onClose={onClose}>
        <ColumnForm onClose={onClose} />
      </Model>
    </>
  );
};

export default AddColumn;
