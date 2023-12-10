import React from "react";
import TodoCount from "./TodoCount.jsx";
import TodoList from "./TodoList.jsx";
import AddTodo from "./AddTodo.jsx";

export default function App() {
  const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);

  return (
    <>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </>
  );
}
