import { Column, Task } from "@/types";

export const moveTask = (
  activeTask: Task,
  sourceColumn: Column,
  destinationColumn: Column
) => {
  const activeTaskIndex = sourceColumn.tasks?.findIndex(
    (task) => task.id === activeTask.id
  )!;
  sourceColumn.tasks?.splice(activeTaskIndex, 1);
  destinationColumn.tasks?.push(activeTask);
};
