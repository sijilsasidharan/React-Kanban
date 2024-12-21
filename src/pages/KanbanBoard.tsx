import KabanColumnProvider from "@/features/kanban-board/kanban-context/kanban-column.context";
import Kanban from "@/features/kanban-board/kanban-columns";

const KanbanBoard = () => {
  return (
    <KabanColumnProvider>
      <Kanban />
    </KabanColumnProvider>
  );
};

export default KanbanBoard;
