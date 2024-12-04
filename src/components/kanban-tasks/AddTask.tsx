import { Column, Task } from '@/types';
import React, { useState } from 'react';
import Model from '../common/Model';
import AddIcon from '../ui/icons/Add.icon';
import TaskForm from './TaskForm';

interface AddTaskProps {
    column: Column;
    setTasks: (task: Task) => void
}

const AddTask: React.FC<AddTaskProps> = ({ column, setTasks }) => {
    const [open, setOpen] = useState(false);

    const onClose = (task: Task | undefined = undefined) => {
        if (task) {
            setTasks(task)
        }
        setOpen(false)
    }

  return (
    <>
        <button  className='
            w-28
            px-2 py-1
            flex justify-between items-center
            text-sm text-gray-300
            border border-gray-300 rounded 
            hover:text-white duration-100 hover:border-white'
            onClick={() => setOpen(true)}>
            <AddIcon />
            <span>Add Task</span>
        </button>
        
        <Model open={open} onClose={onClose}>
            <TaskForm onClose={onClose} column={column} />
        </Model>
    </>
  )
}

export default AddTask