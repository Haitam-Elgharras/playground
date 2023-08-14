import { useContext, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import authContext from "./contexts/authContext";

const TaskList = () => {
  const { tasks, disptach } = useContext(TasksContext);
  const { user } = useContext(authContext);
  return (
    <>
      <p>User: {user}</p>
      <button
        // we passed just the value for the action property
        // the state is managed by the reducer
        onClick={() =>
          disptach({
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
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => disptach({ type: "DELETE", payload: task.id })}
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
