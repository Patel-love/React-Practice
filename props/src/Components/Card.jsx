import React from "react";
// import s from "../assets/s.webp";

function Card({myimage,director,rupee}) {
  const img = "/src/assets/" + myimage;
  console.log(img);
  return (
    <>
      {/* <div className="container">
        <div
          class="card"
          style={{
            width: "18rem",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <img
            src={props.img}
            class="card-img-top"
            alt="Sunset Over the Sea"
            style={{ height: "350px", width: "100%" }}
          />
          <div class="card-body">
          
            <p>
              <b>Director :</b> {props.director}
            </p>
            <p>
              <b>Worldwide Gross : {props.rupee}cr</b>
            </p>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div
          class="card"
          style={{
            width: "18rem",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <img
            src={img}
            class="card-img-top"
            alt="Sunset Over the Sea"
            style={{ height: "350px", width: "100%" }}
          />
          <div class="card-body">
            <p>
              <b>Director :</b> {director}
            </p>
            <p>
              <b>Worldwide Gross : {rupee}cr</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
