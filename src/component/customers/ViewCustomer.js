import React from "react";
import { Link } from "react-router-dom";

const ViewCustomer = () => {
  // console.log(url);
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
      <div className="container mt-4">
        <div className="row">
          <div className="text-right ml-auto">
            <div className="aggregate-button-wrapper">
              <button className="btn mb-4" style={{backgroundColor:"#F5B23F"}}>
                <Link
                  to="/addcustomer"
                  style={{
                    textDecoration: "none",
                    color: "#323032",
                    fontWeight: "bold"
                  }}
                >
                  Add Customer
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container ml-auto">
          <div className="row text-center">
        <table className="table table-bordered" style={{backgroundColor: "#2A707D", color:"white"}}>
          <thead style={{color:"black"}}>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amar</td>
              <td>Dispatcher</td>
              <td>amar@gmail.com</td>
              <td>7676776767</td>
              <td>Mumbai</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      </React.Fragment>
  )
}

export default ViewCustomer;