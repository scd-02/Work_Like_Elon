import { Route, Routes } from "react-router-dom";
import "./App.css";
import TODO from "./utilities/HomePage/TODO";
import LoginPage from "./utilities/LoginPage/LoginPage";
import TaskList from "./utilities/TaskBar/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/TODO" element={<TODO />} />
        <Route exact path="/TaskList" element={<TaskList />} />
      </Routes>
  );
}

export default App;
