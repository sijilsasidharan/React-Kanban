import React from 'react'
import { Task as KanbanTask } from '@/types';
import Task from './Task'
import { useDroppable } from '@dnd-kit/core';

interface TaskListProps {
    tasks: KanbanTask[],
    activeTask: KanbanTask
}

const TaskList: React.FC<TaskListProps> = ({ tasks, activeTask }) => {
  const {isOver, setNodeRef} = useDroppable({
    id: 'task',
    data: {
      type: 'column',
      tasks: tasks
    }
  });
  const style = {
    'border-color': isOver ? 'green' : 'transparent',
    border: '2px'
  }
  return <div className='flex flex-col gap-3'>
      {tasks.map(task => <Task key={task.id} task={task} activeTask={activeTask} />)}
  </div>
}


export default TaskList