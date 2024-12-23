import React, { memo, useContext } from "react";
import KabanTaskProvider from "../kanban-context/kanban-task.context";
import { Column } from "@/types";
import TaskList from "./TaskList";

interface KanbanTaskProps {
  // tasks: KanbanTask[],
  column: Column;
}

const KanbanTask: React.FC<KanbanTaskProps> = memo(({ column }) => {
  return (
    <KabanTaskProvider column={column}>
      <TaskList />
    </KabanTaskProvider>
  );
});

export default KanbanTask;
