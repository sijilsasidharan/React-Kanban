
import KabanColumnProvider from '@/components/context/kanban-column.context';
import Kanban from '@/components/kanban-columns';

const KanbanBoard = () => {

  return (
    <div className='flex flex-col gap-4 p-8 h-full'>
        <KabanColumnProvider>
            <Kanban />
        </KabanColumnProvider>
    </div>
  )
}

export default KanbanBoard
