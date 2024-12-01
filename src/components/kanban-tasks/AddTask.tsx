import { Column, Task } from '@/types';
import React, { useState } from 'react';
import Model from '../common/Model';
import Button from '../ui/Button';
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
        <Button  className='text-white' onClick={() => setOpen(true)} icon={<AddIcon />}>
        </Button>
        
        <Model open={open} onClose={onClose}>
            <TaskForm onClose={onClose} column={column} />
        </Model>
    </>
  )
}

export default AddTask