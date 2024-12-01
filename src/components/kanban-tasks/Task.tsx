import React from 'react'
import { Task as KanbanTask } from '@/types';
import TaskType from './TaskType';
import TaskStatus from './TaskStatus';

interface TaskProps {
    task: KanbanTask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <TaskType type={task.type}>
      <div className='flex flex-col gap-4 bg-zinc-900 p-2 rounded'>
        <div className='flex justify-between items-center'>
          <span>{task.name}</span>
          <TaskStatus status={task.status} />
        </div>
        <div>{task.description}</div>
      </div>
    </TaskType>
  )
}

export default Task