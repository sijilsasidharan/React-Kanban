import { Column } from "@/types";
import React, { FocusEvent, memo } from "react";
import EditableText from "@/components/common/EditableText";
import KanbanTask from "../kanban-tasks";
import { Delete, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddTask from "../kanban-tasks/AddTask";
import { Separator } from "@/components/ui/separator";

interface KanbanColumnProps {
  column: Column;
  onDelete: (id: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = memo(
  ({ column, onDelete }) => {
    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      column.name = event.target.value;
    };

    const log = () => {
      console.log(column);
    };

    const borderColor = `border-[${column.color}]`;
    console.log(column.name, column.id, borderColor);

    return (
      <>
        <Card className="w-80">
          <CardHeader className="flex flex-row items-center justify-between pt-4 pb-0">
            <CardTitle>
              <EditableText
                className="text-xl"
                initialText={column.name}
                onBlur={handleBlur}
              />
              {/* <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-zinc-100 bg-zinc-950 rounded-full ring ring-red-600">
                {column.tasks?.length || 0}
              </span> */}
            </CardTitle>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete(column.id)}
            >
              <Trash2 />
            </Button>
          </CardHeader>
          <Separator className="my-4" />
          <CardContent>
            <div className="flex gap-2">
              {/* <Button onClick={() => log()}>
                <Delete />
              </Button> */}
            </div>
            <KanbanTask column={column} />
          </CardContent>
          <CardFooter>
            <AddTask column={column} />
          </CardFooter>
          {/* <KabanTaskProvider tasks={currentColumn.tasks!}> */}
          {/* <TaskList column={column} isOver={isOver} setNodeRef={setNodeRef} overStyle={style} /> */}
          {/* </KabanTaskProvider> */}
        </Card>
      </>
    );
  }
);

export default KanbanColumn;
