import { Column, Task } from "@/types";
import { createContext, FC, ReactNode, useState } from "react";

export interface IKanbanTaskContext {
  column: Column | undefined;
  addTask: (task: Task) => void;
}

export const KanbanTaskContext = createContext<IKanbanTaskContext>({
  column: undefined,
  addTask: () => {
    throw new Error("addColumn Function not implemented.");
  }
});

const KabanTaskProvider: FC<{ children: ReactNode, column: Column }> = ({ children, column }) => {
  const [currentColumn, setColumn] = useState<Column>(column);
  if (currentColumn?.tasks?.length) {
    column.tasks = currentColumn.tasks
  }
  
  const addTask = (task: Task) => {
    setColumn(column => {
      console.log(column)
      return ({
        ...column,
        tasks: [...column.tasks!, task]
      })
    });
    
  }

  return <KanbanTaskContext.Provider value={{ column: currentColumn, addTask }}>
    { children }
  </KanbanTaskContext.Provider>
}

export default KabanTaskProvider;
