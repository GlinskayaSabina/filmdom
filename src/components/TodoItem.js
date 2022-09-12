import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, index }) {
  return (
    <li>
      <input type="checkbox" />
      {index + 1 + " "}
      {todo.title}
      <button>&times;</button>
    </li>
  );
}

TodoItem.propeTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
