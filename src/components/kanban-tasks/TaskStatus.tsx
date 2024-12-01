import { TaskStatus as KanbanTaskStatus } from '@/types'
import { STATUS_COLORS } from '@/utils'
import React from 'react'

interface TaskStatusProps {
    status: KanbanTaskStatus
}

const TaskStatus: React.FC<TaskStatusProps> = ({ status }) => {
    const colors = `${STATUS_COLORS[status].bg} ${STATUS_COLORS[status].text}`;
  return (
    <div className={`
        text-[11px]
        rounded-lg
        px-[6px]
        py-[1px]
        capitalize
        font-bold
        
        ${colors}
    `}>{status}</div>
  )
}

export default TaskStatus