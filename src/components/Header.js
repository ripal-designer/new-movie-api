import React from 'react'



function Header() {
  return (
    <div className=''>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <button className="navbar-brand"  >Navbar</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button  className="nav-link active" aria-current="page" >Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" >Link</button>
        </li>
        <li className="nav-item">
          <button className="nav-link disabled"  tabIndex="-1" aria-disabled="true">Disabled</button>
        </li>
      </ul>
      <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" aria-live='searchFormInput' />
        <button className="btn btn-outline-light" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
