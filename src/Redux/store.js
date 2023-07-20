import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import { counterReducer } from "./Counter/counter.reducer";
import { todosReducer } from "./Todos/todos.reducer";
import { themeReducer } from "./Theme/theme.reducer";

import { PostReducer } from "./Post/Post.reducer";
import { FeedsReducer } from "./Feeds/Feedsreducer";
import { AuthReducer } from "./Auth/Auth.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  todos: todosReducer,
  Post: PostReducer,
  Feed: FeedsReducer,
  Auth: AuthReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
