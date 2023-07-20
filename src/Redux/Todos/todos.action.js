import {
  TODOS_GET,
  TODOS_ADD,
  TODOS_UPDATE,
  TODOS_DELETE,
} from "./todos.actionTypes";

export const getTodos = () => ({
  type: TODOS_GET,
  payload: [
    { id: 1, value: "Todo 1", isCompleted: false },
    { id: 2, value: "Todo 2", isCompleted: true },
    { id: 3, value: "Todo 3", isCompleted: true },
    { id: 4, value: "Todo 4", isCompleted: false },
  ],
});

export const addTodo = (todo) => ({
  type: TODOS_ADD,
  payload: todo,
});

export const updateTodo = (id, changes) => ({
  type: TODOS_UPDATE,
  payload: {
    id,
    changes,
  },
});

export const deleteTodo = (id) => ({ type: TODOS_DELETE, payload: id });
