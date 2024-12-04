import { useState } from 'react';
import AddColumn from '@/components/kanban-columns/AddColumn';
import KanbanColumn from '@/components/kanban-columns/KanbanColumn';
import { uniqueId } from '@/utils';
import { Column, Task } from '@/types';
import { closestCorners, DndContext, DragEndEvent, DragStartEvent, useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { swapItemsInArray } from '@/utils/arrays';
// import AddColumn from ''

const KanbanBoard = () => {
    const [columns, setColumns] = useState<Column[]>([]);
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const {isOver, setNodeRef} = useDroppable({
        id: 'task',
        data: {
          type: 'column',
          columns: columns
        }
      });
    
    const style = {
        'border-color': isOver ? 'green' : 'transparent',
        border: '2px'
    }

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

    function handleDragStart(event: DragStartEvent) {
        setActiveTask(event.active.data.current?.task)
    }

  
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event
        console.log(event);
        if (active.id === over?.id) {
            return;
        }
        // swapItemsInArray()

    }

  return (
    <div className='flex flex-col gap-4 p-8 h-full'>
        <AddColumn addColumn={addColumn} />
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className='flex flex-col gap-3' style={style}  ref={setNodeRef}>
                <SortableContext items={columns} strategy={verticalListSortingStrategy}>
                <div className='flex gap-4 h-full overflow-y-auto'>
                    {columns.map(column => <KanbanColumn key={column.id} column={column} activeTask={activeTask as Task} onDelete={deleteColumn} />)}
                </div>
                </SortableContext>
                
            </div>
        </DndContext>
    </div>
  )
}

export default KanbanBoard