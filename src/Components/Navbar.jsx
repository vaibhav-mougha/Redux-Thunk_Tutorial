import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TOGGLE_THEME } from "../Redux/Theme/theme.actionTypes";

const Navbar = ({theme}) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "5px solid #7925C7",
      }}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          color: "#7925C7",
        }}
      >
        {" "}
        <h1>Todo Static App</h1>{" "}
      </Link>
      <Link
        to={"/counter"}
        style={{
          textDecoration: "none",
          color: "#7925C7",
        }}
      >
        {" "}
        <h1>Counter App</h1>{" "}
      </Link>{" "}
      <Link
        to={"/reduxThunk"}
        style={{
          textDecoration: "none",
          color: "#7925C7",
        }}
      >
        {" "}
        <h1>Redux Thunk</h1>{" "}
      </Link>{" "}
      <Link
        to={"/packages"}
        style={{
          textDecoration: "none",
          color: "#7925C7",
        }}
      >
        {" "}
        <h1>Packages Used</h1>{" "}
      </Link>{" "}
      <h1
        style={{
          color: "#7925C7",
          cursor: "pointer",
        }}
        onClick={() => dispatch({ type: TOGGLE_THEME })}
      >
        Toggle Theme
      </h1>{" "}
    </div>
  );
};

export default Navbar;
