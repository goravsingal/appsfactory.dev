import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FaCog } from 'react-icons/fa';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/"><FaCog /> Apps-Factory</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/youtube-thumbnail/">Youtube Video Image</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}
