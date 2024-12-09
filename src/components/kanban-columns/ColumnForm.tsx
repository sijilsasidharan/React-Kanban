import React, { FormEvent, useContext, useEffect, useRef, useState,  } from 'react'
import Button from '../ui/Button';
import AddIcon from '../ui/icons/Add.icon';
import CloseIcon from '../ui/icons/Close.icon';
import { KanbanColumnContext } from '../context/kanban-column.context';
import { HEX } from '@/types';

interface ColumnFormProps {
    onClose: () => void;
}

const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

const ColumnForm: React.FC<ColumnFormProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState<HEX>('#00ff00');
    const { addColumn } = useContext(KanbanColumnContext);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {ref.current?.focus()}, [])

    const handleAddColumn = (event: FormEvent) => {
        event.preventDefault();
        addColumn(name, color);
        onClose();
    }

    const handleColorChange = (value: HEX) => {
        if (hexRegex.test(value)) {
            setColor(value);
        }
    }

    
  return (
    <form  onSubmit={handleAddColumn}>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl'>Create Column</h1>
            <Button icon={<CloseIcon />} onClick={onClose}></Button>
        </div>
        <hr />
        <label htmlFor="name">Name: </label>
        <input ref={ref} type="text" onChange={event => setName(event.target.value)} />
        <br />
        <label htmlFor="name">Color: </label>
        <input type="color" pattern={`${hexRegex}`} onChange={event => handleColorChange(event.target.value as HEX)} />
        <br />
        <Button type='submit' className='w-[180px] h-[36px] flex justify-between items-center gap-2' disabled={!name}>
            <AddIcon />
            <span>Add Column</span>
        </Button>
    </form>
  )
}

export default ColumnForm