import React, { useState } from "react";
// import ReactSwitch from "react-switch";
import Header from "../Components/Header";
import "../TaskBar/TaskList.css";

const TaskList = () => {
  // const [checked, setChecked] = useState(false);
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [list, setList] = useState([]);

  // const handleCheck = (val) => {
  //   setChecked(val);
  // };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();

    setTitle("");
    setDescription("");
    setTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store value
    let value = { title, description, time };
    console.log(value);
    addToList(value);
    console.log(list);
  };

  const addToList = (value) => {
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);

    // Reset
    setTitle("");
    setDescription("");
    setTime("");
  };

  return (
    <div className="task-list">
      <div className="Content">
        <div className="box">
          <Header />
          <br />
          <div className="form">
            <div class="mb-2">
              <label class="form-label">Title *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Task Title"
                onChange={handleTitleChange}
                value={title}
                required
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Task Description *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Task Description"
                onChange={handleDescriptionChange}
                value={description}
                required
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Duration *</label>
              <input
                type="time"
                step="1"
                value={time}
                class="form-control"
                placeholder="Time"
                onChange={(ev) => {
                  setTime(ev.target.value);
                }}
                required
              />
            </div>
            <div className="btn d-flex justify-content-around">
              <button
                type="submit"
                class="btn btn-outline-info"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="submit"
                class="btn btn-outline-info"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="footer">
            <div className="setting d-flex justify-content-between">
              <p className="tile">Settings</p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3953/3953226.png"
                alt="settings"
                width="20px"
                height="20px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
