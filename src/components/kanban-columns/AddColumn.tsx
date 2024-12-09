import React, { useState } from 'react'
import Model from '../common/Model';
import Button from '../ui/Button';
import AddIcon from '../ui/icons/Add.icon';
import ColumnForm from './ColumnForm';

const AddColumn: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false)
    }

    const handleAddColumn = (name: string) => {
        setOpen(false);
    }

  return (
    <>        
        <Button className='w-[180px] h-[36px] flex justify-between items-center gap-2' onClick={() => setOpen(true)}>
            <AddIcon />
            <span>Add Column</span>
        </Button>
        
        <Model open={open} onClose={onClose}>
            <ColumnForm onClose={onClose} />
        </Model>
    </>
  )
}

export default AddColumn
