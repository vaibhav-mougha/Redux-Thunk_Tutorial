import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/Todos/todos.action";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // console.log(todos);
  return (
    <div
      style={{
        border: "4px solid #7925C7",
        width: "70%",
        margin: "auto",
        borderRadius: "2rem",
      }}
    >
      <h1>Todo App</h1>

      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoApp;
