import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate();

  const handdleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://64e47c52c555638029134c03.mockapi.io/crud/${id}`, {
      e_name: name,
      e_age: age,
      e_email: email,
    }).then(() => {
        navigate('/')
    })
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-sm btn-outline-info">Read</button>
            </Link>
          </div>
          <div className="bg-light text-center p-2">
            <h1>Edit Data</h1>
          </div>
          <br />

          <form onSubmit={handdleUpdate}>
            <div className="form-group">
              <label>Enter Name: </label>
              <input
                type="text"
                className="form-control mb-2 shadow-none"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age: </label>
              <input
                type="number"
                className="form-control mb-2 shadow-none"
                placeholder="Enter Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email: </label>
              <input
                type="email"
                required
                className="form-control mb-2 shadow-none"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <input
                type="submit"
                value="Update"
                className="btn btn-outline-info"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
