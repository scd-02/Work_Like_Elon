import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlayList from './utilities/HomePage/Playlist';
import TODO from "./utilities/HomePage/TODO";
import LoginPage from "./utilities/LoginPage/LoginPage";
import Pomodoro from "./utilities/Pomodoro/Pomodoro";
import TaskList from "./utilities/TaskBar/TaskList";

function App() {
  return (
      // this is my new todo app
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/TODO" element={<TODO />} />
        <Route exact path="/TaskList" element={<TaskList />} />
        <Route exact path="/PlayList" element={<PlayList />} />
        <Route exact path="/pomodoro" element={<Pomodoro />} />
      </Routes>
  );
}

export default App;
