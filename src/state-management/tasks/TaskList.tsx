import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuth from "../auth/useAuth";

const TaskList = () => {
  // if we use this hook in other place, we need to define it as a custom hook
  const useTasks = () => useContext(TasksContext);

  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();
  return (
    <>
      <p>User: {user}</p>
      <button
        // we passed just the value for the action property
        // the state is managed by the reducer
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: {
              id: Date.now(),
              title: "Task" + Date.now(),
            },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", payload: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
