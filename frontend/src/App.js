import "./App.css";
import TODO from "./utilities/HomePage/TODO";
import LoginPage from "./utilities/LoginPage/LoginPage";
import TaskList from "./utilities/TaskBar/TaskList";

function App() {
  return (
    <>
      <TaskList />
      <TODO />
      <LoginPage />
    </>
  );
}

export default App;
