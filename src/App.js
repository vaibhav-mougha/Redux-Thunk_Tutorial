import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";

function App() {
  const [flag, setFlag] = useState(false);
  const theme = useSelector((store) => store.theme.theme);

  return (
    <div
      className="App"
      style={{
        background: theme,
        color: theme === "white" ? "black" : "white",
        // paddingBottom:"3rem"
        height: "100vh",
      }}
    >
      <Navbar theme={theme} />
      <h1
        style={{
          fontSize: "2.7rem",
          textDecoration: "underline",
          color: "#7925C7",
        }}
      >
        Redux Application / Redux DevTools
      </h1>
      <AllRoutes />
    </div>
  );
}

export default App;
