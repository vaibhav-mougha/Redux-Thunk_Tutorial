import React from "react";
import NavbarReduxThunk from "../Components/NavbarReduxThunk";

const Home = () => {
  return (
    <div>
      <div>
        <NavbarReduxThunk />
      </div>
      <h1>Homepage without auth</h1>
    </div>
  );
};

export default Home;
