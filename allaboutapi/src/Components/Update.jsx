import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users/${id}`)
      .then((res) => {
        setData({
          id: res.data.id,
          name: res.data.name || "",
          email: res.data.email || "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4040/users/${id}`, data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="container mt-5 p-5 w-50 text-center"
      style={{
        backgroundImage: " linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      }}
    >
      <h1 className="text-center text-primary mb-4">
        <b>
          <i>Update User Detail</i>
        </b>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            <b> User ID </b>
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            style={{ borderRadius: "8px" }}
            value={data.id}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <b>User Name </b>
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            style={{ borderRadius: "8px" }}
            placeholder="Enter User Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <b>User Email</b>
          </label>
          <input
            type="email"
            className="form-control shadow-sm"
            style={{ borderRadius: "8px" }}
            placeholder="Enter User Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            style={{ borderRadius: "50px", padding: "10px 20px" }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
