import React from "react";
import Card from "./Card";

function Container() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Container;
