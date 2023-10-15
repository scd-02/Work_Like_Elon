import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlayList from './utilities/HomePage/Playlist';
import TODO from "./utilities/HomePage/TODO";
import LoginPage from "./utilities/LoginPage/LoginPage";
import TaskList from "./utilities/TaskBar/TaskList";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/TODO" element={<TODO />} />
        <Route exact path="/TaskList" element={<TaskList />} />
        <Route exact path="/PlayList" element={<PlayList />} />
      </Routes>
  );
}

export default App;
