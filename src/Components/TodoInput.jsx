import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Todos/todos.action";
import { v4 } from "uuid";

const TodoInput = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          id: v4(),
          value,
          isCompleted: false,
        })
      );
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="value" value={value} onChange={handleChange} />
      <button type="submit"> ADD Todo</button>
    </form>
  );
};

export default TodoInput;
