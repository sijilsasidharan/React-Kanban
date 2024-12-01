import { Column, Task } from '@/types';
import React, { FocusEvent, useState } from 'react';
import EditableText from '../common/EditableText';
import AddTask from '../kanban-tasks/AddTask';
import TaskList from '../kanban-tasks/TaskList';
import Button from '../ui/Button';
import DeleteIcon from '../ui/icons/Delete.icon';

interface KanbanColumnProps {
    key?: string;
    column: Column;
    onDelete: (id: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, onDelete }) => {
  if (!column?.tasks) {
    column.tasks = [];
  }

  const [currentColumn, setColumns] = useState(column);

  const setTasks = (task: Task) => {
    setColumns({
      ...currentColumn,
      tasks: [...currentColumn.tasks!, task]
    });
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      column.name = event.target.value;
  };
  
  return (
    <>
    <div className='w-80 min-w-80 h-full flex flex-col gap-2 bg-zinc-800 px-4 py-2 rounded'>
      <div className='flex justify-between items-center '>
        <div className='flex items-center justify-center gap-2'>
          <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-zinc-100 bg-zinc-950 rounded-full ring ring-red-600">
            {currentColumn.tasks?.length || 0}
          </span>
          <EditableText className='text-xl' initialText={column.name} onBlur={handleBlur} />
        </div>
        <div className='flex gap-2'>
          <AddTask column={column} setTasks={setTasks} />
          <Button  className='text-white' onClick={() => onDelete(column.id)} icon={<DeleteIcon />}>
          </Button>
        </div>
      </div>
      <hr />
      <TaskList tasks={currentColumn.tasks!} />
    </div>
    </>
  )
}

export default KanbanColumn