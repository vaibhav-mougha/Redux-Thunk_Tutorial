import {
  TODOS_GET,
  TODOS_ADD,
  TODOS_UPDATE,
  TODOS_DELETE,
} from "./todos.actionTypes";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODOS_GET: {
      return {
        ...state,
        todos: payload,
      };
    }
    case TODOS_ADD: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case TODOS_UPDATE: {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            ...payload.changes,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case TODOS_DELETE: {
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload);
      return {
        ...state,
        todos: filteredTodos,
      };
    }
    default: {
      return state;
    }
  }
};
