import { Column } from "./column.type";

export type TaskType = "TASK" | "BUG" | "IMPROVEMENT";

export interface Task {
  id: string;
  name: string;
  description: string;
  sprint: number;
  startDate: string;
  estimate: number; // per day
  type: TaskType;
  status: Column["name"];
}
