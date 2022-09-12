import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, index }) {
  return (
    <li>
      {index + 1 + " "}
      {todo.title}
    </li>
  );
}

TodoItem.propeTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
