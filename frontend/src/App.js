import "./App.css";
import Quotes from "./utilities/HomePage/Quotes";
import TODO from "./utilities/HomePage/TODO";
import LoginPage from "./utilities/LoginPage/LoginPage";
import TaskList from "./utilities/TaskBar/TaskList";

function App() {
  return (
    <>
      <Quotes />
      <TaskList />
      <TODO />
      <LoginPage />
    </>
  );
}

export default App;
