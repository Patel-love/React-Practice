import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <div className=" bg-info  " style={{ height: "361px", width: "100%" }}>
        <div className="container text-center">
          <h1 className="pt-5">About...</h1>
        </div>
      </div>
    </>
  );
}

export default About;

// import React from "react";
// import { useLocation } from "react-router-dom";

// function About() {

// const location = useLocation()
// console.log(location.state);

//   return (
//     <>
//       <div className=" bg-info  " style={{ height: "361px", width: "100%" }}>
//         <div className="container text-center">
//           <h1 className="pt-5">About...</h1>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;
