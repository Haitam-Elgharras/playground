import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, disptach] = useReducer(tasksReducer, []);
  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, disptach }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
