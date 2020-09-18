import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from "../images/logo.png";

class Sidebar extends Component{
    render(){
        return(
<div class="wrapper">
    <div class="sidebar">
        <Link className="navbar-brand m-0 p-0" to="/">
          <img src={logo}  alt="logo" style={{backgroundColor:"#323032"}}/>
        </Link>
        {/* <h2>Sidebar</h2> */}
        <ul>
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
            <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
            <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

</div>
  );
}
}
export default Sidebar;