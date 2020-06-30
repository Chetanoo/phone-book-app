import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link to="/search" className="navbar-brand">
        PhoneBook
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
