import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./TasksProvider";

function App() {
  return (
    <TasksProvider>
      <AuthProvider>
        <NavBar />
        <HomePage />
      </AuthProvider>
    </TasksProvider>
  );
}

export default App;
