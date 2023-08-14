import { ReactNode, useReducer } from "react";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, disptach] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, disptach }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
