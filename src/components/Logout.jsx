import React from "react";
import { Link } from "react-router-dom";
function Logout(props) {
  return (
    <div
      onClick={() => props.authenticate(false)}
      style={{ textAlign: "right", marginRight: "50px", marginTop: "10px" }}
    >
      <Link to="/" type="submit" className="btn btn-success">
        Logout
      </Link>
    </div>
  );
}
export default Logout;
