import React, { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button';
import AddIcon from '../ui/icons/Add.icon';
import CloseIcon from '../ui/icons/Close.icon';

interface ColumnFormProps {
    addColumn: (name: string) => void;
    onClose: () => void;
}

const ColumnForm: React.FC<ColumnFormProps> = ({ addColumn, onClose }) => {
    const [name, setName] = useState('');

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {ref.current?.focus()}, [])

    
  return (
    <form>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl'>Create Column</h1>
            <Button icon={<CloseIcon />} onClick={onClose}></Button>
        </div>
        <hr />
        <label htmlFor="name">Name: </label>
        <input ref={ref} type="text" onChange={event => setName(event.target.value)} />
        <br />
        <Button type='submit' className='w-[180px] h-[36px] flex justify-between items-center gap-2' onClick={() => addColumn(name)} disabled={!name}>
            <AddIcon />
            <span>Add Column</span>
        </Button>
    </form>
  )
}

export default ColumnForm