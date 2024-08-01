import React from "react";

function Array() {
  const color = ["Blue", "Red", "Green", "Black"];
  const coloritem = color.map((colors,idx) =><li key={idx}>{colors}</li>);

  return (
    <>
      <ul>{coloritem}</ul>
    </>
  );
}

export default Array;
