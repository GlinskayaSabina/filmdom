import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li id="click">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          id="box"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        {todo.title}
      </span>

      <button className="crossButton" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propeTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
