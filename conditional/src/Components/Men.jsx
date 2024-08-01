import React from "react";
import Men01 from "./Men01";

function Man() {
  return (
    <>
      <h1 className=" text-center bg-dark text-white py-2 ">
        <b>
          <i>Mens Collection</i>
        </b>
      </h1>
      <div className="container ">
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Men01 image="m1" name="HIGHLANDER" mrp="412" off="1649"  per="75" link="https://www.myntra.com/men?f=Categories%3AShirts&rawQuery=men"/>
          </div>
          <div className="col-4">
            <Men01 image="m2"   name="Campus Sutra" mrp="759" off="1899" per="60" 
            link="https://www.myntra.com/shirts/campus+sutra/campus-sutra-classic-self-design-spread-collar-casual-shirt/28219632/buy" />
          </div>
          <div className="col-4">
            <Men01 image="m3"   name="WROGN" mrp="1111" off="2099" per="38"
            link="https://www.myntra.com/men?f=Categories%3AShirts&rawQuery=men"/>
          </div>
        </div>
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Men01 image="m4"   name="HERE&NOW" mrp="781" off="2299" per="66" 
            link="https://www.myntra.com/men?f=Categories%3AShirts&rawQuery=men" />
          </div>
          <div className="col-4">
            <Men01 image="m5"   name="THE BEAR HOUSE" mrp="545" off="1399" per="61" 
            link="https://www.myntra.com/shirts/wrogn/wrogn-men-black-slim-fit-casual-shirt/16217602/buy" />
          </div>
          <div className="col-4">
            <Men01 image="m6"   name="WROGN" mrp="879" off="2199" per="60" 
            link="https://www.myntra.com/men?f=Categories%3AShirts&rawQuery=men" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Man;
