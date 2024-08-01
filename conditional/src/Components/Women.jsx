import React from "react";
import Women02 from "./Women02";

function Women() {
  return (
    <>

<h1 className=" text-center bg-dark text-white py-2 ">
        <b>
          <i>Women Collection</i>
        </b>
      </h1>
      <div className="container ">
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Women02 image="w1" name="Mast & Harbour" mrp="428" off="1099"  per="61" link="https://www.myntra.com/tshirts/mast+%26+harbour/mast--harbour-printed-drop-shoulder-sleeves-pure-cotton-t-shirt/27159552/buy" />
          </div>
          <div className="col-4">
            <Women02 image="w2"   name="Roadster" mrp="407" off="1199" per="66" link="https://www.myntra.com/tshirts/roadster/the-roadster-life-co-printed-drop-shoulder-sleeves-t-shirt/24110606/buy" />
          </div>
          <div className="col-4">
            <Women02 image="w3"   name="EDRIO" mrp="599" off="1299" per="62" link="https://www.myntra.com/tshirts/roadster/the-roadster-life-co-printed-drop-shoulder-washed-effect-pure-cotton-oversized-t-shirt/27069108/buy"/>
          </div>
        </div>
        <div className="row m-auto py-5 text-center">
          <div className="col-4">
            <Women02 image="w4"   name="DILLINGER" mrp="441" off="1299" per="66" link="https://www.myntra.com/tshirts/dillinger/dillinger-women-red--beige-typography-printed-pure-cotton-loose-t-shirt/17692896/buy" />
          </div>
          <div className="col-4">
            <Women02 image="w5"   name="Blissclub" mrp="455" off="1199" per="62" link="https://www.myntra.com/tshirts/roadster/the-roadster-life-co-typography-printed-drop-shoulder-sleeves-t-shirt/24110234/buy"/>
          </div>
          <div className="col-4">
            <Women02 image="w6"   name="PROTEENS" mrp="879" off="2199" per="60" link="https://www.myntra.com/tshirts/roadster/the-roadster-lifestyle-co-women-mauve-polo-collar-t-shirt/10969910/buy"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
