import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "../HomePage/TODO.css";
import "../TaskBar/TaskList";

const TODO = () => {

  // const deleteItem = (index) => {
  //   let temp = list.filter((item, i) => i !== index);
  //   setList(temp);
  // };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/TaskList");
  };

  useEffect(() => {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltip) => new window.bootstrap.Tooltip(tooltip));
  }, []);

  return (
    <div className="todo">
      <div className="Content">
        <div className="box">
          <Header />
          <div className="date">
            <h2 className=" d-flex justify-content-around">SUNDAY, 25 JUNE</h2>
            <hr style={{color: "white"}}/>
          </div>
          <div className="list-container">
            <h4>Today</h4>
            <div className="list">
              {/* <ul>
                  {list.length > 0 && 
                    list.map((item, i) => <li className="mb-2" onClick={() => deleteItem(i)} >{item}</li>)
                  }
                </ul> */}
            </div>
          </div>
          <div className="quote d-flex justify-content-center">
            {/* integrate  api */}
            <q>Be the Change You Want to See in the World.</q>
          </div>

          {/* add functionaliyt and navigation to each pages.... */}
          <div className="footer d-flex justify-content-around">
            <button className="btn">
              <img
                className="b1"
                src="https://cdn-icons-png.flaticon.com/128/6878/6878705.png"
                alt="PlayList"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="PlayList"
              />
            </button>
            <button className="btn">
              <img
                className="b1"
                src="https://cdn-icons-png.flaticon.com/128/10274/10274647.png"
                alt="notification"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="notifications"
              />
            </button>
            <button className="btn" onClick = {handleClick}>
              <img
                className="b2"
                src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                alt="add"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD"
              />
            </button>
            <button className="btn">
              <img
                className="b1"
                src="https://cdn-icons-png.flaticon.com/128/833/833533.png"
                alt="edit"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Edit"
              />
            </button>
            <button className="btn">
              <img
                className="b1"
                src="https://cdn-icons-png.flaticon.com/128/9386/9386918.png"
                alt="profile"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="profile"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TODO;
