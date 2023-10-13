import { useState } from "react";
import Header from "../Components/Header";
import "../LoginPage/LoginPage.css";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store to databse
    
    // redirect TODO page

  };

  return (
    <div className="login-page">
      <div className="Content">
        <div className="box">
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
              />
            </div>
            <div className="tag mt-1">
              <a>Forget Your Password?</a>
            </div>
            <div className="btn d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-outline-success"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
          <div className="footer">
            <img
              src="https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png"
              alt="footer"
              width="400px"
              height="150px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
