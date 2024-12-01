import React from 'react'
import { Task as KanbanTask } from '@/types';
import Task from './Task'

interface TaskListProps {
    tasks: KanbanTask[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    console.log(tasks)
  return <div className='flex flex-col gap-3'>
   {tasks.map(task => <Task key={task.id} task={task} />)}
  </div>
}


export default TaskList