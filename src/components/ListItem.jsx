import React from "react";
function List(props) {
  return (
    <li class="list-group-item active Item">
      {props.name}
      <img alt={props.name} align="right" src={props.image} />
    </li>
  );
}
export default List;
