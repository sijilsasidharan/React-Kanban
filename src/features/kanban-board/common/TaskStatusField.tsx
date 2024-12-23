import React from "react";
import TaskStatus from "./TaskStatus";

const TaskStatusField = ({ form, onFormChange }) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend>Task Status</legend>
      <div className="flex">
        <input
          type="radio"
          value="OPEN"
          id="open"
          name="status"
          checked={form.status === "OPEN"}
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
          checked={form.status === "BACKLOG"}
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
          checked={form.status === "PENDING"}
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
          checked={form.status === "CLOSED"}
          onChange={onFormChange}
        />
        <label htmlFor="closed">
          <TaskStatus status="CLOSED" />
        </label>
      </div>
    </fieldset>
  );
};

export default TaskStatusField;
