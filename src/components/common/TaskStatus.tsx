import { STATUS_COLORS, TaskStatus as KanbanTaskStatus } from "@/utils";
import React, { memo } from "react";

interface TaskStatusProps {
  status: KanbanTaskStatus;
}

const TaskStatus: React.FC<TaskStatusProps> = memo(({ status }) => {
  const colors = `${STATUS_COLORS[status].bg} ${STATUS_COLORS[status].text}`;
  // console.log('Task Status');
  return (
    <div
      className={`
        text-[11px]
        rounded-lg
        px-[6px]
        py-[1px]
        capitalize
        font-bold
        
        ${colors}
    `}
    >
      {status}
    </div>
  );
});

export default TaskStatus;
