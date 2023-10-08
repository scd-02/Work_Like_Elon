import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import Header from "../Components/Header";
import '../TaskBar/TaskList.css';

const TaskList = () => {

  const [checked, setChecked] = useState(false);

  const handleChange = val =>{
    setChecked(val)
  }


  return (
    <div className="task-list">
      <div className="Content">
        <div className="box">
          <Header />
          <div className="form">
            <div class="mb-2">
              <label for="disabledTextInput" class="form-label">Title <sup>*</sup></label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="Task Title" />
            </div>
            <div class="mb-2">
              <label for="disabledSelect" class="form-label">Task Description <sup>*</sup></label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="Task Description" />
            </div>
            <div class="mb-2">
              <label for="disabledSelect" class="form-label">Duration <sup>*</sup></label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="Time" />
            </div>
          </div>
          <div className="footer">
            <div className="pomodoro d-flex justify-content-between">
              <p className='tile'>PomoDoro</p>
              <ReactSwitch checked={checked} onChange={handleChange}/>
            </div>
            <div className="setting d-flex justify-content-between">
              <p className='tile'>Settings</p>
              <img src="https://cdn-icons-png.flaticon.com/128/3953/3953226.png" alt="settings" width="20px" height="20px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
