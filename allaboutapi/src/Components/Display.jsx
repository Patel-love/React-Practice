import React from "react";
import Data from "../Data.json";

function Display() {
  return (
    <>
      {Data.map((element) => {
        return (
          <div
            key={element.id}
            className="container m-auto bg-info-subtle text-center p-2"
          >
            <h2>{element.name}</h2>
            <h2>{element.email}</h2>
            {element.course.map((e) => {
              return <i key={element.id}>{e.tech}</i>;
            })}
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Display;
