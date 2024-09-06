import React from "react";
import ChildContext from "./ChildContext";

function ParentContext() {
  return (
    <>
      <div className="container text-bg-secondary text-center p-4 mt-5">
        <h2>Parent Component</h2>
        <ChildContext />
      </div>
    </>
  );
}

export default ParentContext;
