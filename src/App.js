import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "Боль в зубе" },
    { id: 2, completed: false, title: "Боль в голове" },
    { id: 3, completed: false, title: "Боль в ноге" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Add Todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
