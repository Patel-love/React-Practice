import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [inpData, setInpData] = useState({ name: "", email: "" });
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4040/users", inpData)
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  }

  if (redirect) {
    navigate("/");
  }

  return (
    <div
      className="container mt-5 p-5 text-center w-50 "
      style={{ backgroundImage: " linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", borderRadius: "10px" }}
    >
      <h1 className="text-center text-success mb-4"><b><i>Add User Detail</i></b></h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <b>User Name</b>
          </label>
          <input
            type="text"
            className="form-control shadow-sm w-75 m-auto"
            style={{ borderRadius: "8px" }}
            placeholder="Enter User Name"
            onChange={(e) => setInpData({ ...inpData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <b>User Email</b>
          </label>
          <input
            type="email"
            className="form-control shadow-sm w-75 m-auto"
            style={{ borderRadius: "8px" }}
            placeholder="Enter User Email"
            onChange={(e) => setInpData({ ...inpData, email: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-outline-success"
            style={{ borderRadius: "50px", padding: "10px 20px" }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
