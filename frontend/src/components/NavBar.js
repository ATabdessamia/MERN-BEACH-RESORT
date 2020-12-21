/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.svg" alt="Beach Resort logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 fs-5 fw-bolder">
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
