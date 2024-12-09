import React, { useContext } from 'react';
import { Column } from '@/types';;
import Task from './Task'
import KabanTaskProvider, { KanbanTaskContext } from '../context/kanban-task.context';
import AddTask from './AddTask';
import { useDroppable } from '@dnd-kit/core';



const TaskList: React.FC = () => {
  
  const { column } = useContext(KanbanTaskContext);
  
  const { isOver, setNodeRef } = useDroppable({
    id: column?.id!,
    data: {
      type: 'column',
      column: column
    }
  });

  console.log('Task List');

  const style = {
    borderColor: isOver ? 'green' : 'transparent',
    border: '2px'
  };

  return <div ref={setNodeRef} className='flex flex-col gap-3' style={isOver ? style : {}}>
      { column?.tasks?.map(task => <Task key={task.id} task={task} />)}
  </div>
}


export default TaskList