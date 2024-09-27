import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignup() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const signupUser = () => {
    createUserWithEmailAndPassword(auth,data.email,data.password).then(() => {
      alert("User SignUp Successfully");
    });
  };

  return (
    <>
      <div className="container text-bg-dark p-4 w-50">
      <h1 className='text-center '>User SignUP</h1>

        <div className="col">
          <label htmlFor="">User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email "
            className="form-control my-3"
            value={data.email}
            onChange={(e) => {
              setData({...data,email:e.target.value});
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="">User Password</label>
          <input
            type="password"
            required
            placeholder="Enter Your Password "
            className="form-control my-3"
            value={data.password}
            onChange={(e) => {
              setData({...data,password:e.target.value});
            }}
          />
        </div>
        <div className="col">
          <button className="btn btn-outline-primary" onClick={signupUser}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
