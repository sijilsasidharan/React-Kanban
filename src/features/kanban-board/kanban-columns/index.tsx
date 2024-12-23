import { useCallback, useContext, useState } from "react";
import { KanbanColumnContext } from "./../kanban-context/kanban-column.context";
import { Task as ITask } from "@/types";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import AddColumn from "./AddColumn";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import KanbanColumn from "./KanbanColumn";
import { createPortal } from "react-dom";
import Task from "../kanban-tasks/Task";
import { moveTask } from "@/utils";

const Kanban = () => {
  const { columns } = useContext(KanbanColumnContext);
  const [activeTask, setActiveTask] = useState<ITask | null>(null);

  const deleteColumn = useCallback((id: string) => {
    // setColumns(
    //     columns.filter((column) => column.id !== id)
    // );
  }, []);

  function handleDragStart(event: DragStartEvent) {
    setActiveTask(event.active.data.current?.task);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // console.log(active, over);
    // if (!over) return;

    // if (active.id === over?.id) {
    //     return;
    // }

    // const overColumn = columns.find((col) => col.id === over.id);
    // const activeTask = columns.tasks.find((task) => task.id === active.id);

    // if (activeTask && overColumn) {
    //   moveTask(activeTask.id, overColumn.status);
    // } else if (active.id !== over.id) {
    //   const oldIndex = tasks.findIndex((task) => task.id === active.id);
    //   const newIndex = tasks.findIndex((task) => task.id === over.id);
    //   reorderTasks(arrayMove(tasks, oldIndex, newIndex));
    // }
    // event.over?.data?.current?.column?.tasks?.push(activeTask)
    // event.over?.data?.current?.column?.tasks?.push(activeTask);
    moveTask(
      activeTask!,
      active.data.current?.column,
      over?.data?.current?.column
    );
    console.log(event, activeTask);

    setActiveTask(null);
  }

  return (
    <>
      <AddColumn />
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext items={columns} strategy={verticalListSortingStrategy}>
          <div className="flex gap-4 h-full overflow-y-auto mt-2">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                column={column}
                onDelete={deleteColumn}
              />
            ))}
          </div>
        </SortableContext>

        {activeTask &&
          createPortal(
            <DragOverlay>
              <Task task={activeTask} />
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </>
  );
};

export default Kanban;
