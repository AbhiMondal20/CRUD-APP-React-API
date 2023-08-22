import React, { useState } from "react";
import axiox from "axios";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handdleSubmit = (e) => {
    e.preventDefault();
    axiox.post("https://64e47c52c555638029134c03.mockapi.io/crud", {
      e_name: name,
      e_age: age,
      e_email: email,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-light text-center p-2">
            <h1>Create Data</h1>
          </div>
          <br />
          <form onSubmit={handdleSubmit}>
            <div className="form-group">
              <label>Enter Name: </label>
              <input
                type="text"
                className="form-control mb-2 shadow-none"
                placeholder="Enter Name"
                required
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <input
                type="submit"
                value="Save"
                className="btn btn-outline-info"
              />
            </div>
          </form>
          {name}
          <br />
          {age}
          <br />
          {email}
        </div>
      </div>
    </>
  );
}

export default Create;
