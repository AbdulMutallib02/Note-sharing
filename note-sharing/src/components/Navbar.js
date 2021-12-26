import React from "react";
import {Link } from "react-router-dom"

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <img src="https://cdn.w600.comps.canstockphoto.com/hands-sharing-ideas-drawing_csp39325496.jpg" alt="" />

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/ContactUs'>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/ViewNotes'>ViewNotes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Profile'>Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Registration'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Login'>Login</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
