import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import PackagesUsed from "./PackagesUsed";
import ReduxThunk from "./ReduxThunk";
import TodoApp from "./TodoApp";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Feeds from "../Pages/Feeds";
import Careers from "../Pages/Careers";
import Posts from "../Pages/Posts";
import RequireAuth from "../hoc/RequireAuth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/packages" element={<PackagesUsed />} />
      <Route path="/reduxThunk" element={<ReduxThunk />} />
      <Route path="/home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="feeds"
        element={
          <RequireAuth>
            <Feeds />
          </RequireAuth>
        }
      />
      <Route
        path="careers"
        element={
          <RequireAuth>
            <Careers />
          </RequireAuth>
        }
      />
      <Route
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
