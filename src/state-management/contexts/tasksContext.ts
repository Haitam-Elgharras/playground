import React from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface TasksContextType {
  tasks: Task[];
  disptach: React.Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
