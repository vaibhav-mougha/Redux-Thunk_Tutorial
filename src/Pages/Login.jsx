import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LogIn } from "../Redux/Auth/Auth.action";
import NavbarReduxThunk from "../Components/NavbarReduxThunk";

const Login = () => {
  const isAuth = useSelector((store) => store.Auth.isAuth);
  const dispatch = useDispatch();
  const [loginCreds, setLoginCreds] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LogIn(loginCreds));
  };

  useEffect(() => {
    if (isAuth) {
      if (state.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/home");
      }
    }
  }, [isAuth]);
  return (
    <div>
      <div>
        <NavbarReduxThunk />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "300px",
          maxHeight: "400px",
          gap: "10px",
          border: "3px solid #7925C7",
          borderRadius: "1.7rem",
          marginTop: "3rem",
          padding: "1.2rem",
          paddingBottom: "3rem",
        }}
      >
        <h2
          style={{
            color: "#7925C7",
            fontWeight: "bold",
          }}
        >
          {" "}
          Login
        </h2>
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
          style={{
            height: "1.7rem",
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
          style={{
            height: "1.7rem",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#7925C7",
            color: "#FFFFFF",
            padding: "0.7rem",
            height: "3rem",
            width: "100%",
            fontSize: "1.2rem",
            borderRadius: "1.3rem",
            borderColor: "#7925C7",
            marginTop: "0.8rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
