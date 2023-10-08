import { useState } from "react";
import Header from '../Components/Header';
import '../HomePage/TODO.css';

const TODO = () => {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addToList = () =>{
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("");
  };

  const deleteItem = (index) => {
    let temp = list.filter((item, i) => i !== index);
    setList(temp);
  };

  return( 
    <div className="todo">
        <div className="Content">
          <div className="box">
            <Header />
            <div className="date d-flex justify-content-around">
              <div className="day">
                SUNDAY, 25 JUNE
              </div>
              {/* <img src="https://cdn-icons-png.flaticon.com/128/5544/5544140.png" alt="prev" width="20px"/>
              <img src="https://cdn-icons-png.flaticon.com/128/181/181669.png" alt="next" width="20px"/> */}
            </div>
            <div className="list-container">
              <h4>Today</h4>
              <div className="list">
                <ul>
                  {/* {list.length > 0 && 
                    list.map((item, i) => <li onClick={() => deleteItem(i)} >{item}</li>)
                  } */}
                  <li class="list-group-item list-group-item-success mb-2">A simple success list group item</li>
                  <li class="list-group-item list-group-item-danger mb-2">A simple danger list group item</li>
                  <li class="list-group-item list-group-item-warning mb-2">A simple warning list group item</li>
                  <li class="list-group-item list-group-item-info mb-2">A simple info list group item</li>
                </ul>
              </div>
            </div>
            <div className="quote d-flex justify-content-center">
                <p>Be the Change You Want to See in the World.</p>
            </div>
            <div className="footer d-flex justify-content-around">
              <img className="b1" src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png" alt="youtube" />
              <img className="b1" src="https://cdn-icons-png.flaticon.com/128/10274/10274647.png" alt="notification" />
              <img className="b2" src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="add" />
              <img className="b1" src="https://cdn-icons-png.flaticon.com/128/833/833533.png" alt="edit" />
              <img className="b1" src="https://cdn-icons-png.flaticon.com/128/9386/9386918.png" alt="profile" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default TODO;
