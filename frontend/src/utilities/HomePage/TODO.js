/* global chrome */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "../HomePage/TODO.css";
import "../TaskBar/TaskList";

import Quotes from "./Quotes";

const TODO = () => {
  const { author, quote} = Quotes();

  const deleteItem = (index) => {
    let temp = items.filter((item, i) => i !== index);
    setItems(temp);
  };

  const [items, setItems] = useState([]);
  const [loading, isLoading] = useState(true);
  
  useEffect(() => {
    chrome.storage.local.get(["task_list"]).then((res) => {
      if (res.task_list) {
        setItems(res.task_list);
        isLoading(false);
      }
    });
  }, []);

  if (!loading) console.log(items);


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/TaskList");
  };
  const handlePlaylistClick = () => {
    navigate("/PlayList");
  };
  const handlePomodoroClick = () =>{
    navigate("/pomodoro");
  };

  return (
    <div className="todo">
      <div className="Content">
        <div className="box">
          <Header />
          <div className="date">
            <h2 className=" d-flex justify-content-around">SUNDAY, 25 JUNE</h2>
            <hr style={{ color: "white" }} />
          </div>
          <div className="list-container">
            <h4>Today</h4>
            <div className="list">
              <ul>
                  {!loading && items.length > 0 && items.map((item) => (
                      <li key={item.id}
                      ClassName="mb-2"
                      onClick={() => deleteItem(item.id)}
                      >
                        <p className="mb-1">
                          <b>{item.title}:</b> {item.description}
                          <br />
                          Duration:{item.time}  
                        </p>
                      </li>
                    ))
                  }
              </ul>
            </div>
          </div>
          <div className="quote">
            {/* integrate  api */}
            <q>{quote}</q>
            <p>---{author}</p>
          </div>
          {/* add functionaliyt and navigation to each pages.... */}
          <div className="footer d-flex justify-content-around">
            <OverlayTrigger placement="top" overlay={<Tooltip>playlist</Tooltip>}>
              <button className="btn" onClick={handlePlaylistClick} >
                <img
                  className="b1"
                  src="https://cdn-icons-png.flaticon.com/128/6878/6878705.png"
                  alt="PlayList"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="PlayList"
                />
              </button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Add Task</Tooltip>}>
              <button className="btn" onClick={handleClick}>
                <img
                  className="b2"
                  src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                  alt="add"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="ADD"
                />
              </button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
              <button className="btn" onClick={handlePomodoroClick}>
                <img
                  className="b1"
                  src="https://cdn-icons-png.flaticon.com/128/12238/12238205.png"
                  alt="Pomodoro"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Pomodoro"
                />
              </button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TODO;
