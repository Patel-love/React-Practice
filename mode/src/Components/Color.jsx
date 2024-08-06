import React,{useState} from "react";

function Color() {
 
  const [bgColor, setbgColor] = useState("white");


  const changeColor = () => {
    if (bgColor === 'white') {
        setbgColor('black');
      } else {

        
        setbgColor('white');



      }
  };
 
  return (
    <>
   
      <div
        style={{
          backgroundColor: bgColor,
          // width:"100%",
          // height: "100vh",

        }}
      >
        <button onClick={changeColor}>Background Color</button>
      </div>
    </>
  );
}

export default Color;
