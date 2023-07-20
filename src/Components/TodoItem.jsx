import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/Todos/todos.action";

const TodoItem = ({ id, value, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        onClick={() =>
          dispatch(
            updateTodo(id, {
              isCompleted: !isCompleted,
            })
          )
        }
      >
        {value} : {isCompleted ? "Completed" : "In Complete"}
      </h1>
      <button onClick={() => dispatch(deleteTodo(id))}>DELETE</button>
    </div>
  );
};

export default TodoItem;
