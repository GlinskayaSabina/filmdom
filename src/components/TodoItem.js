import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, onChange }) {
  console.log(todo);
  return (
    <li>
      <span>
        <input type="checkbox" onChange={() => onChange(todo.id)} />
        {todo.title}
      </span>

      <button className="crossButton">&times;</button>
    </li>
  );
}

TodoItem.propeTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
