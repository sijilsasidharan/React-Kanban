import { Task } from "./task.type";

export interface Column {
    id: string;
    name: string;
    tasks?: Task[];
}