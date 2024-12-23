import React from "react";
import { Color, TaskType as KanbanTaskType } from "@/types";

interface TaskTypeProps {
  type: KanbanTaskType;
  children: React.ReactNode;
}

const taskTypeColor: Readonly<Record<KanbanTaskType, Color>> = {
  TASK: "#2DCCFF",
  BUG: "#FF3838",
  IMPROVEMENT: "#9b38ff",
};

const TaskType: React.FC<TaskTypeProps> = ({ type, children }) => {
  // console.log('Task Type');
  return (
    <div
      style={{ borderColor: taskTypeColor[type] }}
      className={`border-l-4 rounded`}
    >
      {children}
    </div>
  );
};

export default TaskType;
