import React, { Component } from "react";
import "./Invoice.css";
import { Link } from "react-router-dom";

const GenerateInvoice = [
  {
    "Name":"Jhon",
    "Email":"Jhon@gmail.com",
    "Contact":78895151,
    "Invoice":1
  },
  {
    "Name":"Akansha",
    "Email":"Jhon@gmail.com",
    "Contact":78895151,
    "Invoice":2
  },
  {
    "Name":"Swati",
    "Email":"Jhon@gmail.com",
    "Contact":78895151,
    "Invoice":3
  }
]

class Invoice extends Component {
  constructor(){
    super();
    this.state={
      search: ""
    }
  }
  //   constructor() {
  //     super();
  //     this.state = {
  //       customers: [],
  //       filteredCustomers: [],
  //       societies: [],
  //     };
  //   }
  onChange = event =>{
    this.setState({
      search: event.target.value
    });
  }

  handleInvoice = (data) => {
    const {search} = this.state;
    if(search !==""&& data.Name.toLowerCase().indexOf(search.toLowerCase())==-1){
      return null
    }

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.Name}</td>
            <td>{data.Email}</td>
            <td>{data.Contact}</td>
            <td>
              {data.GenerateInvoice} <i class="far fa-file-pdf"></i>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  render = () => {
    // const { searchTerm, societies, filteredCustomers, society } = this.state;
    return (
      <div className="container mt-4">
        <div className="row">
          {/* <div className="col-12 col-md-6">
            <div className="d-flex align-items-center mb-3">
                        <div>Society: </div>
                        <div className="form-group mb-0 ml-2">
                            <select
                                className="custom-select"
                                value={society}
                                onChange={this.handleSocietyChange}
                            >
                                <option value="all">All Society</option>
                                {societies.map(s =>
                                    <option value={s}>{s}</option>
                                )} 
                            </select>
                        </div>
                    </div>
          </div> */}
          <div className="col-12 col-md-6 col-lg-3 ml-auto">
            <div className="d-flex align-items-center mb-3">
              {/* <ul>
                            <Link>
                        <i class="fas fa-search"></i> Search</Link>
                        <Link>Action <span class="caret"></span></Link>
                        </ul> */}

              <form class="d-flex justify-content-center md-form form-sm mt-0">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input
                  class="form-control form-control-sm ml-3 w-75"
                  type="text"
                  onChange={this.onChange}
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    color: "black",
                    borderTop: "Hidden",
                    borderRight: "Hidden",
                    borderLeft: "Hidden",
                    border: "none",
                    boxBorder: "none",
                  }}
                />
                {/* <input
                  class="form-control form-control-sm ml-3 w-75"
                  placeholder="Action"
                  
                  aria-label="Search"
                /> */}
                <Link
                  className="right sm ml-3 w-75"
                  to="/"
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Action <i class="fas fa-caret-down"></i>
                </Link>
              </form>
              {/* <i class="fas fa-caret-down"></i> */}
              {/* <div className="form-group mb-0 ml-2">
                            <input
                                type="text"
                                className="form-control"
                                value={searchTerm}
                                onChange={this.handleSearch}
                                placeholder="Search"
                            />
                        </div> */}
            </div>
          </div>
        </div>
        {/* <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer Name</td>
              <td>test@gmail.com</td>
              <td>contact number</td>
              <td>
                Generate invoice <i class="far fa-file-pdf"></i>
              </td>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td>test@gmail.com</td>
              <td>contact number</td>
              <td>
                Generate invoice <i class="far fa-file-pdf"></i>
              </td>
            </tr>
          </tbody> */}

        <div className="row">
          {GenerateInvoice.map((data) => {
            return this.handleInvoice(data);
          })}
        </div>
        {/* <tbody>
                    {filteredCustomers.map(({ customer_name, phone, flat_no, wings_name, society_name }) => {
                        const address = `${wings_name}/${flat_no}, ${society_name}`
                        return <tr>
                            <td>{customer_name}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                        </tr>
                    })}
                </tbody> */}
        {/* </table> */}
      </div>
    );
  };
}

export default Invoice;
