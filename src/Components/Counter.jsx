import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  COUNTER_INC,
  COUNTER_DEC,
  COUNTER_RESET,
} from "../Redux/Counter/counter.actionTypes";

const Counter = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "4px solid #7925C7",
        width: "70%",
        margin: "auto",
        borderRadius: "2rem",
        padding: "2rem",
      }}
    >
      <h1>Counter : {count}</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "10%",
          margin: "auto",
          paddingBottom: "2rem",
        }}
      >
        <div>
          <button onClick={() => dispatch({ type: COUNTER_INC, payload: 2 })}>
            +
          </button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: COUNTER_DEC, payload: 1 })}>
            -
          </button>
        </div>
      </div>

      <div>
        <button
          style={{
            background: "#7925C7",
            color: "#FFFFFF",
            padding: "1.2rem",
            borderRadius: "2rem",
            borderColor: "#7925C7",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          onClick={() => dispatch({ type: COUNTER_RESET })}
        >
          Reset COUNTER
        </button>
      </div>
    </div>
  );
};

export default Counter;
