import React, { useEffect, useState } from "react";

function Productcard() {
  const [dataId, setDataId] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      console.log("running");
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${dataId}`);
        const apidata = await res.json();
        console.log(res);

        setData(apidata);
        console.log(apidata);
      } catch (error) {
        console.log("404 NOT FOUND");
      }
    };
    fetchdata();
    return () => {
      console.log("CleanUp Product Data");
    };
  }, [dataId]);

  return (
    <>
      <div className="container text-center border border-5 ">
        <h2><i><u>Produt Cards Using UseEffect</u></i></h2>

        {data ? (
          <div className="card m-auto mb-3 mt-3" style={{ width: "18rem" }}>
            <img
              src={data.image}
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
              className="card-img-top m-auto"
              alt="..."
            />
            <div className="card-body">
              <p>
                <b>Category :</b> {data.category}
              </p>
              <p className="card-title">
                <b>Title :</b> {data.title.slice(0, 30)}
              </p>
              <p className="card-text">{data.description.slice(0, 40)}</p>
              <p>
                <b>Price : </b>
                {data.price}
              </p>
              <p>
                <b>Rating :-</b> <b> Rate : </b> {data.rating.rate}{" "}
                <b>Count : </b> {data.rating.count}{" "}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading ...</p>
        )}

        <button
          type="button"
          className="btn btn-outline-dark ps-4 pe-4 me-4 mb-5"
          onClick={() => {
            setDataId(dataId - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-outline-dark ps-4 pe-4 ms-5 mb-5"
          onClick={() => {
            setDataId(dataId + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Productcard;
