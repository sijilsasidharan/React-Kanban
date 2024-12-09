import { Column } from '@/types';
import React, { FocusEvent, memo} from 'react';
import EditableText from '../common/EditableText';
import Button from '../ui/Button';
import DeleteIcon from '../ui/icons/Delete.icon';
import KanbanTask from '../kanban-tasks';

interface KanbanColumnProps {
    column: Column;
    onDelete: (id: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = memo(({ column, onDelete }) => {

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      column.name = event.target.value;
  };
  
  const log = () => {
    console.log(column);
  }

  const borderColor =`border-[${column.color}]`;
  console.log(column.name, column.id, borderColor)

  return (
    <>
    <div className={`w-80 min-w-80 h-full flex flex-col gap-2 bg-[#161a1d] px-4 py-2 border ${borderColor} rounded`}>
      <div className='flex justify-between items-center '>
        <div className='flex items-center justify-center gap-2'>
          <EditableText className='text-xl' initialText={column.name} onBlur={handleBlur} />
          <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-zinc-100 bg-zinc-950 rounded-full ring ring-red-600">
            {column.tasks?.length || 0}
          </span>
        </div>
        <div className='flex gap-2'>
          <Button  className='text-white' onClick={() => log()} icon={<DeleteIcon />}>
          </Button>
          <Button  className='text-white' onClick={() => onDelete(column.id)} icon={<DeleteIcon />}>
          </Button>
        </div>
      </div>
      <hr />
      {/* <KabanTaskProvider tasks={currentColumn.tasks!}> */}
        {/* <TaskList column={column} isOver={isOver} setNodeRef={setNodeRef} overStyle={style} /> */}
      {/* </KabanTaskProvider> */}
      <KanbanTask column={column} />
    </div>
    </>
  )
});

export default KanbanColumn;