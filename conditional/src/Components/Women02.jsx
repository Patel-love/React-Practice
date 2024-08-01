import React from 'react'

function Women02({image,name,mrp,off,per,link}) {

    const imgurl = "/src/assets/" + image + ".jpg";


  return (
    <>
     <div class="card rounded-3" style={{ width: "18rem",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
        <img
          src={imgurl}
          class="card-img-top rounded-3"
          alt="Sunset Over the Sea"
        />
        <div class="card-body">
         <h4>{name}</h4>
         <p><b>₹{mrp} MRP  <del>₹{off}</del> <br /> ({per}% OFF)</b></p>
          <a href={link} target='_blank' class="btn btn-outline-primary" type="button" data-mdb-ripple-init>
            BUY NOW
          </a>
        </div>
      </div>
    </>

  )
}

export default Women02