import React, { ChangeEvent, FocusEvent, KeyboardEvent, useRef, useState } from 'react'

interface EditableTextProps {
    initialText: string;
    className?: string;
    onBlur: (event: FocusEvent<HTMLInputElement>) => void
}
const EditableText: React.FC<EditableTextProps> = ({ initialText, className, onBlur }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [text, setText] = useState<string>(initialText);
    const ref = useRef<HTMLInputElement>(null);

    const toggleEditState = () => {
        setIsEditing(state => {
            if (!state) {
                setTimeout(() => ref.current?.focus());
            }
            return !state
        
        });
    }

    if (!isEditing) {
        return <div className={`${className} text-ellipsis line-clamp-1`} onDoubleClick={toggleEditState}>{text}</div>
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange');
        setText(event.target.value)
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log(event);
        if (event.code === 'Enter') {
            setIsEditing(false);
        }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        console.log('handleBlur');
        setIsEditing(false);
        onBlur(event);
    }

    return (
        <>
            <input ref={ref} className='border border-white rounded' type="text" value={text} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} />
        </>
  )
}

export default EditableText