import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="index.html"><img src="./img/logo300.png" width={54} alt /> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="Regester">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}