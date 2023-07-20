import React from "react";

const PackagesUsed = () => {
  return (
    <div
      style={{
        border: "4px solid #7925C7",
        width: "70%",
        margin: "auto",
        borderRadius: "2rem",
      }}
    >
      <h1
        style={{
          textDecoration: "underline",
        }}
      >
        Packges/Commands Used in this App
      </h1>
      <h2>json-server --watch db.json --port 8080</h2>
      <h2>axios</h2>
      <h2>react-router-dom</h2>
      <h2>redux</h2>
      <h2>react-redux</h2>
      <h2>redux-thunk</h2>

      <h2>uuid</h2>
    </div>
  );
};

export default PackagesUsed;
