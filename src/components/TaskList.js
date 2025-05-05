import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  // Ensure tasks is not empty or undefined
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
