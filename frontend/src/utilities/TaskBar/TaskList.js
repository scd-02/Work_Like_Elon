import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import Header from "../Components/Header";
// import TODO from '../HomePage/TODO';
import '../TaskBar/TaskList.css';

const TaskList = () => {

  const [checked, setChecked] = useState(false);
  const [time, setTime] = useState("");
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // const [list, setList] = useState([]);
  // const [value, setValue] = useState("");

  const handleCheck = val =>{
    setChecked(val);
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleClick = () => {
    setTitle('');
    setDescription('');
    setTime("");
  };

  // const addToList = () =>{
  //   // let tempArr = list;
  //   // tempArr.push(value);
  //   setList([{title, description, time}]);
  //   setValue("");
  //   setTitle('');
  //   setDescription('');
  //   setTime("");
  // };

  // const deleteItem = (index) => {
  //   let temp = list.filter((item, i) => i !== index);
  //   setList(temp);
  // };

  return (
      <div className="task-list">
        <div className="Content">
          <div className="box">
            <Header />
            <div className="form">
              <div class="mb-2">
                <label class="form-label">Title <sup>*</sup></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Task Title"
                  onChange={handleTitleChange}
                  value={title} />
              </div>
              <div class="mb-2">
                <label class="form-label">Task Description <sup>*</sup></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Task Description"
                  onChange={handleDescriptionChange}
                  value={description} />
              </div>
              <div class="mb-2">
                <label class="form-label">Duration <sup>*</sup></label>
                <input 
                    type="time"
                    step="1"
                    value={time}
                    class="form-control"
                    placeholder="Time"
                    onChange={(ev) => { setTime(ev.target.value) }} />
              </div>
              <div className="btn d-flex justify-content-around">
                <button type="submit" class="btn btn-outline-info" >Submit</button>
                <button type="submit" class="btn btn-outline-info" onClick={handleClick}>Clear</button>
              </div>
            </div>
            <div className="footer">
              <div className="pomodoro d-flex justify-content-between">
                <p className='tile'>PomoDoro</p>
                <ReactSwitch checked={checked} onChange={handleCheck}/>
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
