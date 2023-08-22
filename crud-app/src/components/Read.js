import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApidata] = useState([]);
  function getData() {
    axios
      .get("https://64e47c52c555638029134c03.mockapi.io/crud")
      .then((response) => {
        console.log(response.data);
        setApidata(response.data);
      });
  }
function handdleDelete(id) {
    axios.delete(`https://64e47c52c555638029134c03.mockapi.io/crud/${id}`)
    .then(()=> {
        getData();
    });
}

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div className="mb-2 mt-2">
        <Link to='/create'>
            <button className="btn btn-sm btn-outline-info">Create Now</button>
        </Link>
    </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((item) => {
            return (
              <>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.e_name}</td>
                  <td>{item.e_age}</td>
                  <td>{item.e_email}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-success btn-sm shadow-none"
                    >
                      Edit
                    </button>{" "}
                    <button
                      type="submit"
                      className="btn btn-danger btn-sm shadow-none"
                      onClick={() => {if(window.confirm('Are You Sure To Delete Data ??')) { handdleDelete(item.id) }}}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
