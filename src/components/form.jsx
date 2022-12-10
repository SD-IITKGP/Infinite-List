import React from "react";
import Login from "../components/login";
function Form(props) {
  return (
    <div className="Login">
      <Login autheticate={props.autheticate}></Login>
    </div>
  );
}
export default Form;
