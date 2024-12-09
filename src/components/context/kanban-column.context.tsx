import { Column, HEX } from "@/types";
import { uniqueId } from "@/utils";
import { createContext, FC, ReactNode, useState } from "react";

export interface IKanbanColumnContext {
  columns: Column[];
  addColumn: (name: string, color: HEX) => void;
  getColumn: (id: string) => Column | undefined;
}

export const KanbanColumnContext = createContext<IKanbanColumnContext>({
  columns: [],
  addColumn: () => {
    throw new Error("addColumn Function not implemented.")
  },
  getColumn: function (): Column {
    throw new Error("getColumn Function not implemented.");
  }
});

const KabanColumnProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [columns, setColumns] = useState<Column[]>([]);

  const addColumn = (name: string, color: HEX) => {
    const column: Column = {
      id: uniqueId(),
      name,
      color,
      tasks: []
    };
    setColumns(prev => [...prev, column]);
  }

  const getActiveColumn = (id: string) => {
    return columns.find(column => column.id === id);
  }

  return <KanbanColumnContext.Provider value={{ columns, addColumn, getColumn: getActiveColumn }}>
    { children }
  </KanbanColumnContext.Provider>
}

export default KabanColumnProvider;
