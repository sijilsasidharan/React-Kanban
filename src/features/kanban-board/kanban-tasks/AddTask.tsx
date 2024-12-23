import { Column, Task } from "@/types";
import React, { useState } from "react";
// import Model from "@/common/Model";
import TaskForm from "./TaskForm";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AddTaskProps {
  column: Column;
  // setTasks: (task: Task) => void
}

const AddTask: React.FC<AddTaskProps> = ({ column }) => {
  const onClose = (task: Task | undefined = undefined) => {
    if (task) {
      // setTasks(task)
    }
    // setOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          <span>Add Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <TaskForm onClose={onClose} column={column} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
