import React, { memo, useContext } from "react";
import { Task as KanbanTask } from "@/types";
import TaskType from "./TaskType";
import TaskStatus from "../common/TaskStatus";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanTaskContext } from "../context/kanban-task.context";

interface TaskProps {
  task: KanbanTask;
}
const Task: React.FC<TaskProps> = memo(({ task }) => {
  const { column } = useContext(KanbanTaskContext);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
      data: {
        type: "task",
        task,
        column,
      },
    });

  // console.log('Task', task.name);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <TaskType type={task.type}>
        <div className="flex flex-col gap-4 bg-[#22272b] p-2 rounded">
          <div className="flex justify-between items-center">
            <span>{task.name}</span>
            <TaskStatus status={task.status} />
          </div>
          <div>{task.description}</div>
        </div>
      </TaskType>
    </div>
  );
});

export default Task;
