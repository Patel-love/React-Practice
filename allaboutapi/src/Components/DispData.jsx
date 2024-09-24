import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DispData() {
  const [col, setCol] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => {
        setCol(Object.keys(res.data[0]));
        setRecord(res.data);
      })
      .catch((err) => console.log("Bad Request"));
  }, []);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:4040/users/${id}`)
      .then(() => {
        setRecord(record.filter((item) => item.id !== id));
      })
      .catch((err) => console.log("Error deleting record", err));
  }

  return (
    <div
      className="container mt-5 p-4"
      style={{
        backgroundImage: " linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: "8px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-success">User Data</h1>
        <Link to="/create" className="btn btn-primary">
          <strong>+ Add New User</strong>
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover text-center">
          <thead className="table-dark">
            <tr>
              {col.map((e, i) => (
                <th key={i}>{e.toUpperCase()}</th>
              ))}
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {record.map((a, j) => (
              <tr key={j}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>
                  <Link
                    to={`/update/${a.id}`}
                    className="btn btn-outline-success me-2"
                    style={{
                      borderRadius: "50px",
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.375rem 1rem",
                    }}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger ms-2"
                    style={{
                      borderRadius: "50px",
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.375rem 1rem",
                    }}
                    onClick={() => handleDelete(a.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DispData;
