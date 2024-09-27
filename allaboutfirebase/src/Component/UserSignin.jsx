import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinuser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("UserSignIn Successfully");
      })
      .catch((err) => {
        console.log("404 Not Found", err);
      });
  };

  return (
    <>
      <div className="container text-bg-dark p-4 mt-5 w-50">
        <h1 className="text-center ">User SignIN</h1>
        <div className="col">
          <label htmlFor="">User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email "
            className="form-control my-3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <button className="btn btn-outline-primary" onClick={signinuser}>
            Sign IN
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignin;
