import React from "react"

const Navbar = () => {
    return (
        <React.Fragment>
         
  <nav className="nav-extended">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a>Test 1</a></li>
        <li className="tab"><a>Test 4</a></li>
      </ul>
    </div>
  </nav>


            
  </React.Fragment>
    )
}

export default Navbar
