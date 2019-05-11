import React, { Component } from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <Link to="/">
        <a className="navbar-brand text-white kanit">TheethawatSpace</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about/" className="nav-link kanit">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" className="nav-link kanit">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio/" className="nav-link kanit">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://dev.theethawatspace.in.th"
              className="nav-link kanit"
              target="_blank"
            >
              Practical Server
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
