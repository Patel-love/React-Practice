import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

function Hello() {
  const db = getDatabase(app);
  const sendData = () => {
    set(
      ref(db, "user/manav"),

      {
        id: 1,
        name: "manav",
        email: "manav@gmail.com",
      }
    ).then(() => {
      console.log("Data Added Successfully");
    });
  };
  return <>
  
  
  <h1>Firebase RealTime Database</h1>
  <button className="btn btn-outline-dark" onClick={sendData}>Send Data</button>
  
  
  
  </>;
}

export default Hello;
