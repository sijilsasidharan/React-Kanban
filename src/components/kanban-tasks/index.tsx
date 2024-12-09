import React, { memo, useContext } from 'react'
import KabanTaskProvider from '../context/kanban-task.context'
import { Column } from '@/types';
import TaskList from './TaskList';
import AddTask from './AddTask';


interface KanbanTaskProps {
  // tasks: KanbanTask[],
  column: Column;
}

const KanbanTask: React.FC<KanbanTaskProps> = memo(({ column }) => {
  return (
    <KabanTaskProvider column={column}>
      <TaskList  />
      <AddTask column={column}/>
    </KabanTaskProvider>
  )
})

export default KanbanTask