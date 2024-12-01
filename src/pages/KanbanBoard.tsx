import { useState } from 'react';
import AddColumn from '@/components/kanban-columns/AddColumn';
import KanbanColumn from '@/components/kanban-columns/KanbanColumn';
import { uniqueId } from '@/utils';
import { Column } from '@/types';
// import AddColumn from ''

const KanbanBoard = () => {
    const [columns, setColumns] = useState<Column[]>([]);

    const addColumn = (name: string) => {
        const column: Column = {
            id: uniqueId(),
            name
        }
        setColumns(prev => [...prev, column]);
    }

    const deleteColumn = (id: string) => {
        setColumns(
            columns.filter((column) => column.id !== id)
        );
    }

  return (
    <div className='flex flex-col gap-4 p-8 h-full'>
        <AddColumn addColumn={addColumn} />
        <div className='flex gap-4 h-full overflow-y-auto'>
            {columns.map(column => <KanbanColumn key={column.id} column={column} onDelete={deleteColumn} />)}
        </div>
    </div>
  )
}

export default KanbanBoard