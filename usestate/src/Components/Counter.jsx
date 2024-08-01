import React, { useState } from "react";
import Card from "./Card";

function Counter() {
  const [count, state] = useState(0);

  function increment() {
    state(count + 1);
  }
  function decrement() {
    if (count > 0) {
      state(count - 1);
    }
  }

  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5">
          <b>
            <i>Counter</i>
          </b>
        </h1>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={increment}
        >
          Increment
        </button>
        <button type="button" className="m-5 btn btn-outline-dark">
          
          {/* <Card/> */}
          <div class="card"  style={{ width: " 18rem" }}>
          {count}
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
