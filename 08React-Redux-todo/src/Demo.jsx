import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/TodoSlice";
function Demo() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <h1>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </h1>
    </div>
  );
}

export default Demo;
