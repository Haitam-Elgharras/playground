import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { AuthProvider } from "./state-management/auth";
import Counter from "./state-management/counter/Counter";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <TasksProvider>
      <AuthProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </AuthProvider>
    </TasksProvider>
  );
}

export default App;
