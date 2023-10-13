import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "../LoginPage/LoginPage.css";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/TODO");
  };

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // store to databse
    
  //   // redirect TODO page

  // };

  return (
    <div className="login-page">
      <div className="Content">
        <div className="box1">
          <Header />
          <div className="title">
            <h5 className="d-flex justify-content-center">Login Here</h5>
            <hr />
          </div>
          <div className="form">
            <div>
              <label class="form-label ">UserName *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Username or e-mail"
                value={userName}
                onChange={handleChangeUsername}
                required
              />
            </div>
            <div>
              <label class="form-label">Password *</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                required
              />
            </div>
            <div className="tag mt-1">
              <a>Forget Your Password?</a>
            </div>
            <div className="btn d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-outline-success"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
