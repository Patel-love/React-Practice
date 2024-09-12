import React from "react";
import { NavLink, useParams } from "react-router-dom";

function Header() {
    const params = useParams()
  return (
    <>
      <nav>
        <NavLink className={(e) => (e.isActive ? "text-bg-dark p-2" : "")} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/team">
          <li>Team</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/profile">
          <li>Profile</li>
        </NavLink>
        <h1>Profile : {params.profileId}</h1>
      </nav>
    </>
  );
}

export default Header;














// import React from "react";
// import { NavLink, useParams } from "react-router-dom";

// function Header() {
//     const params = useParams()
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-dark ">
//         <div className="container ">
//           <a className="navbar-brand text-white" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto px-5 mb-2 mb-lg-0 ">
//               <li className="nav-item ">
//                 <a className="nav-link active text-white" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               {/* <li className="nav-item">
//                 <NavLink
//                 //   className={()=>`nav-link active px-5 text-white`}
//                 className="nav-link active px-5 text-white"
//                   aria-current="page"
//                   to="#"
//                 >
//                   About
//                 </NavLink>
//               </li> */}
//                <li className="nav-item ">
//                 <a className="nav-link active text-white mx-5" aria-current="page" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active text-white" aria-current="page" href="#">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link active px-5 text-white"
//                   aria-current="page"
//                   href="#"
//                 >
//                   ContactUS
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link active text-white"
//                   style={{ marginRight: "200px" }}
//                   aria-current="page"
//                   href="#"
//                 >
//                   Github
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <button className="btn btn-outline-success" type="submit">
//                 LogIn
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;
