import { Column, Task } from "@/types";
import { uniqueId } from "@/utils";
import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TaskStatus from "../common/TaskStatus";
import { KanbanTaskContext } from "../kanban-context/kanban-task.context";
import { Button } from "@/components/ui/button";
import { CircleX, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface TaskFormProps {
  column: Column;
  onClose: (newTask?: Task | undefined) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onClose }) => {
  const [taskForm, setTaskForm] = useState<Task>({
    id: uniqueId(),
    name: "",
    description: "",
    estimate: 0,
    sprint: 0,
    startDate: Date.now().toString(),
    type: "TASK",
    status: "PENDING",
  });

  const ref = useRef<HTMLInputElement>(null);

  const { addTask } = useContext(KanbanTaskContext);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleSumbit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    addTask(taskForm);
    onClose();
    console.log("end");
  };

  const handleClose = (event: MouseEvent) => {
    event.preventDefault();
    onClose();
  };

  const onFormChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    event.preventDefault();
    setTaskForm({
      ...taskForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const disable = () => !taskForm.name;
  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="name">Name:</label>
      <Input
        ref={ref}
        id="name"
        name="name"
        type="text"
        onChange={onFormChange}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <Textarea id="description" name="description" onChange={onFormChange} />
      <br />
      <label htmlFor="sprint">Sprint:</label>
      <select id="sprint" name="sprint" onChange={onFormChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <br />
      <label htmlFor="estimate">Estimate:</label>
      <select id="estimate" name="estimate" onChange={onFormChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <br />
      <fieldset>
        <legend>Task Type</legend>
        <div>
          <input
            type="radio"
            value="TASK"
            id="task"
            name="type"
            checked={taskForm.type === "TASK"}
            onChange={onFormChange}
          />
          <label htmlFor="task">Task</label>
        </div>
        <div>
          <input
            type="radio"
            value="BUG"
            id="bug"
            name="type"
            checked={taskForm.type === "BUG"}
            onChange={onFormChange}
          />
          <label htmlFor="bug">Bug</label>
        </div>
        <div>
          <input
            type="radio"
            value="IMPROVEMENT"
            id="improvement"
            checked={taskForm.type === "IMPROVEMENT"}
            name="type"
            onChange={onFormChange}
          />
          <label htmlFor="improvement">Improvement</label>
        </div>
      </fieldset>
      <br />
      {/* 'OPEN' | 'BACKLOG' | 'PENDING' | 'DEV-READY' | 'STAGE-READY' | 'QA-FAILED' | 'VERIFIED' | 'CENCELLED' | 'APPROVED' | 'CLOSED'    */}
      <fieldset className="flex flex-col gap-2">
        <legend>Task Status</legend>
        <div className="flex">
          <input
            type="radio"
            value="OPEN"
            id="open"
            name="status"
            checked={taskForm.status === "OPEN"}
            onChange={onFormChange}
          />
          <label htmlFor="open">
            <TaskStatus status="OPEN" />
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            value="BACKLOG"
            id="backlog"
            name="status"
            checked={taskForm.status === "BACKLOG"}
            onChange={onFormChange}
          />
          <label htmlFor="backlog">
            <TaskStatus status="BACKLOG" />
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            value="PENDING"
            id="pending"
            name="status"
            checked={taskForm.status === "PENDING"}
            onChange={onFormChange}
          />
          <label htmlFor="pending">
            <TaskStatus status="PENDING" />
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            value="CLOSED"
            id="closed"
            name="status"
            checked={taskForm.status === "CLOSED"}
            onChange={onFormChange}
          />
          <label htmlFor="closed">
            <TaskStatus status="CLOSED" />
          </label>
        </div>
      </fieldset>
      <br />
      {/* <button type='submit'>Add Task</button> */}
      <Button
        type="submit"
        className="w-[160px] h-[36px] flex justify-between items-center gap-2 self-center"
        disabled={disable()}
      >
        <Plus />
        <span>Add Task</span>
      </Button>
    </form>
  );
};

export default TaskForm;
