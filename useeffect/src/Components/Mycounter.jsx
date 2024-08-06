import React, { useEffect, useState } from "react";

function Mycounter() {
  const [count, setcount] = useState(0);

  useEffect(() => {

    console.log("Count is :- ", count);

    return () => {

      console.log("Clean UP");

    };

  }, [count]);

  return (
    <>
      <div className="container">
       
        <h1>Count Is :- {count}</h1>
        <button className="ms-5"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          in
        </button>
        <button className="ms-5"
          onClick={() => {
            setcount(count - 1);
          }}
        >
          Dec
        </button>
      </div>
    </>
  );
}

export default Mycounter;
