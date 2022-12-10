import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login(props) {
  const [username, changeUsername] = useState("");
  const [password, changepassword] = useState("");
  function checkUsername(event) {
    changeUsername(event.target.value);
  }
  function checkPassword(event) {
    changepassword(event.target.value);
  }
  return (
    <div className="container-fluid col-lg-6 col-sm-12 col-md-10 form">
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            onChange={checkUsername}
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={checkPassword}
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
          />
        </div>
        <Link
          onClick={() => {
            username === "foo" && password === "bar"
              ? props.authenticate(true)
              : props.authenticate(false);
          }}
          to="home"
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}
export default Login;
