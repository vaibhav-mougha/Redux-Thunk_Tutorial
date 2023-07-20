import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {TOGGLE_THEME} from "../redux/Theme/theme.actionTypes"

const ToggleTheme = () => {
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        background: theme,
        color: theme === "White" ? "black" : "white",
      }}
    >
      <button onClick={() => dispatch({type:TOGGLE_THEME}) } >Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
