import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import AppBar from "./components/AppBar";
import TodosList from "./components/TodosList/TodosList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "learn Node JS and" },
    { id: 2, task: "do a bit of jogging" },
    { id: 3, task: "study Korean Language " },
    { id: 4, task: "flat design colors, Google's Material design scheme " },
    { id: 5, task: "study Korean Language " },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <AppBar />

      <AddTodoForm addTodo={addTodo} />

      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default React.memo(App);
