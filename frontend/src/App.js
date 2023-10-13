import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Quotes from "./utilities/HomePage/Quotes";
import TODO from "./utilities/HomePage/TODO";
import LoginPage from "./utilities/LoginPage/LoginPage";
import TaskList from "./utilities/TaskBar/TaskList";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/TODO" element={<TODO />} />
        <Route exact path="/TaskList" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
