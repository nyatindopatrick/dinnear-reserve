import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login-main">
        <div className="split left">
          <div className="centered"></div>
        </div>

        <div className="split right">
          <div className="center-right">
            <h3>DINNEAR</h3>
            <div className="login_inputs">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="form-control my-4"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="login-buttons">
              <Link to="/">
                <button className="btn_login" size="large">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
