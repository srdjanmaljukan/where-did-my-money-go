import React from "react";

function NavBar() {
    return (<div className="nav-bar">
        <h1>Where Did My Money Go?</h1>
      <ul className="navigation">
        <li><a href="" className="nav-link">Main</a></li>
        <li><a href="#recent" className="nav-link">Latest Expenses</a></li>
        <li><a href="" className="nav-link">Categories</a></li>
        <li><a href="" className="nav-link">History</a></li>
      </ul>
    </div>)
}

export default NavBar;