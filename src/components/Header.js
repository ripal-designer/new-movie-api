import React from 'react'



function Header() {
  return (
    <div className=''>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href={null}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={null}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={null}>Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href={null} tabIndex="-1" aria-disabled="true">Disabled</a>
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
