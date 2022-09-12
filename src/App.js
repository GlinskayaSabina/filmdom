import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Боль в зубе" },
    { id: 2, completed: false, title: "Боль в голове" },
    { id: 3, completed: false, title: "Боль в ноге" },
  ];
  return (
    <div className="wrapper">
      <h1>React</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
