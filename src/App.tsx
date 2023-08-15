import HomePage from "./routing/HomePage";
import NavBar from "./routing/NavBar";
import AuthProvider from "./state-management/AuthProvider";
import { TasksProvider } from "./state-management/tasks";

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
