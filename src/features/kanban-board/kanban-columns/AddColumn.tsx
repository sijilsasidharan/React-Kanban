import React, { useState } from "react";
import ColumnForm from "./ColumnForm";
import { Plus } from "@mynaui/icons-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddColumn: React.FC = () => {
  const onClose = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-40">
          <Plus />
          <span>Add Column</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Column</DialogTitle>
        </DialogHeader>
        <ColumnForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddColumn;
