import React from "react";
import Navbar from "./component/dashboard/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidenavbar from "./component/dashboard/Sidenavbar";
import Sidebar from "./component/dashboard/Sidebar";
import Invoice from "./component/invoice/Invoice";
import Notifications from "./component/notifications/Notifications";
import Addemployee from "./component/employee/Addemployee";
import Viewemployee from "./component/employee/Viewemployee";
import User from "./component/user/User";
import AddUser from "./component/user/AddUser";
import Role from "./component/role/Role";
import AddRole from "./component/role/AddRole";
import AddCustomer from "./component/customers/AddCustomer";
import ViewCustomer from "./component/customers/ViewCustomer";
import ViewOrder from "./component/orders/ViewOrder";
import CreateOrder from "./component/orders/CreateOrder";
import ProjectDailyBoard from "./component/project/ProjectDailyBoard";
import DispatchDailyBoard from "./component/dispatch/DispatchDailyBoard";
import Accounts from "./component/accounts/Accounts";
import Billing from "./component/billing/Billing";
import Fleet from "./component/fleets/Fleet"

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <div className="row">
          <div className="col-2 m-0 p-0">
            <Sidenavbar />
          </div>
          <div className="col-10 m-0 p-0">
          
            <Route path="/user" component={User} exact />
            <Route path="/adduser" component={AddUser} exact />
            <Route path="/role" component={Role} exact />
            <Route path="/addrole" component={AddRole} exact />
            <Route path="/customer-invoice" component={Invoice} exact />
            <Route path="/notification" component={Notifications} exact />
            <Route path="/addemployee" component={Addemployee} exact />
            <Route path="/viewemployee" component={Viewemployee} exact />
            <Route path="/addcustomer" component={AddCustomer} exact />
            <Route path="/viewcustomer" component={ViewCustomer} exact />
            <Route path="/addorder" component={CreateOrder} exact />
            <Route path="/vieworder" component={ViewOrder} exact />
            <Route path="/project-dailyboard" component={ProjectDailyBoard} exact />
            <Route path="/dispatch-dailyboard" component={DispatchDailyBoard} exact />
            <Route path="/account" component={Accounts} exact />
            <Route path="/billings" component={Billing} exact />
            <Route path="/fleet" component={Fleet} exact />
          </div>
        </div>
{/* <div className="row">
        <div className="col-3 m-0 p-0">
          <Sidebar/>
        </div>
        <div className="col-9 m-0 p-0">
          <Navbar/>
        </div>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
