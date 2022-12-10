import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div
      className="container-Fluid"
      style={{ marginTop: "20%", textAlign: "center" }}
    >
      <p>Please go back to</p>
      <Link className="btn btn-danger" to="/">
        Authenticate
      </Link>
    </div>
  );
}
export default Error;
