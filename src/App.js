import React from "react";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    { id: 1, completed: false, title: "Боль в зубе" },
    { id: 2, completed: false, title: "Боль в голове" },
    { id: 3, completed: false, title: "Боль в ноге" },
  ];

  function toggleTodo(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  return (
    <div className="wrapper">
      <h1>React</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
