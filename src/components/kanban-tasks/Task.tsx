import React, { useState } from 'react'
import { Task as KanbanTask } from '@/types';
import TaskType from './TaskType';
import TaskStatus from './TaskStatus';
import { DragOverlay, useDndContext, useDraggable } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskProps {
    task: KanbanTask;
    activeTask: KanbanTask;
}
const Task: React.FC<TaskProps> = ({ task, activeTask }) => {

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
    id: task.id,
    data: {
      type: 'task',
      task
    }
  });


  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <TaskType type={task.type}>
        <div className='flex flex-col gap-4 bg-[#22272b] p-2 rounded'>
          <div className='flex justify-between items-center'>
            <span>{task.name}</span>
            <TaskStatus status={task.status} />
          </div>
          <div>{task.description}</div>
        </div>
      </TaskType>
      { activeTask && createPortal(<DragOverlay>
        <TaskType type={task.type}>
          <div className='flex flex-col gap-4 bg-[#22272b] p-2 rounded'>
            <div className='flex justify-between items-center'>
              <span>{task.name}</span>
              <TaskStatus status={task.status} />
            </div>
            <div>{task.description}</div>
          </div>
        </TaskType>
      </DragOverlay>, document.body)}
    </div>
  )
}

export default Task