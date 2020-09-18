import React, { Component } from "react";
import "./Sidenavbar.css";
import { Link } from "react-router-dom";

class Sidenavbar extends Component {
  render() {
    return (
      <div className="sidenav sidebar-collapse sidebar-show">
        {/* <h2 className="text-center">Welcome</h2>
                <hr className="mb-0" /> */}
        <ul>
          <Link className="side-nav_link" to="/" >
            <span>
              <i class="fas fa-bars"></i>
            </span>{" "}
            Menu
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-chart-line"></i>
            </span>{" "}
            Dashboard
          </Link>
          <Link className="side-nav_link" to="/project-dailyboard">
            <span>
            <i class="fas fa-project-diagram"></i>
            </span>{" "}
            Project
          </Link>
          <Link className="side-nav_link" to="/dispatch-dailyboard">
            <span>
            <i class="fas fa-shipping-fast"></i>
            </span>{" "}
            Dispatch
          </Link>
          <Link className="side-nav_link" to="/user">
            <span>
            <i class="fas fa-user-plus"></i>
            </span>{" "}
            User
          </Link>
          <Link className="side-nav_link" to="/viewcustomer">
            <span>
            <i class="fas fa-user-circle"></i>
            </span>{" "}
            Customer
          </Link>
          <Link className="side-nav_link" to="/vieworder">
            <span>
            <i class="fas fa-sort"></i>
            </span>{" "}
            Orders
          </Link>
          {/* <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-chart-line"></i>
            </span>{" "}
            Delivery
          </Link> */}
          <Link className="side-nav_link" to="/fleet">
            <span>
            <i class="fas fa-truck"></i>
            </span>{" "}
            Fleet
          </Link>
          <Link className="side-nav_link" to="/billings">
            <span>
            <i class="fas fa-file-invoice-dollar"></i>
            </span>{" "}
           Billing
          </Link>
          <Link className="side-nav_link" to="/account">
            <span>
            <i class="fas fa-user-circle"></i>
            </span>{" "}
            Accounts
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
            <i class="fas fa-map-marker" aria-hidden="true"></i>
            </span>{" "}
            Map
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-chart-line"></i>
            </span>{" "}
            Reports
          </Link>

          <Link className="side-nav_link" to="/Viewemployee">
            <span>
              <i class="fas fa-chart-line"></i>
            </span>{" "}
            Employee
          </Link>
          <Link className="side-nav_link" to="/notification">
            <span>
            <i class="fas fa-bell"></i>
            </span>{" "}
            Notifications
          </Link>
          <Link className="side-nav_link" to="/customer-invoice">
            <span>
            <i class="fas fa-file-invoice"></i>
            </span>{" "}
            Generate Invoice
          </Link>
        </ul>
        <ul className="align-bottom">
          <Link className="side-nav_link" to="/">
            Organization
          </Link>
          {/* <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-users"></i>
            </span>{" "}
            Team
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-cog"></i>
            </span>{" "}
            Settings
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
              <i class="fab fa-elementor"></i>
            </span>{" "}
            Materials
          </Link> */}
        </ul>
      </div>
    );
  }
}

export default Sidenavbar;
