export interface Task {
  id: number;
  title: string;
}

export interface TaskAction {
  type: "ADD" | "DELETE";
  payload: Task | number;
}

const tasksReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload as Task];
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
