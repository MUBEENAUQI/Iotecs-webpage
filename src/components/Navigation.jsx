import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            IoTECS for Medical Transportation
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Location">
                  Location
                </NavLink>
              </li>
                          <li className="nav-item" onClick={event => window.location.href = 'http://localhost/videocall/#6f9996'}>
                <NavLink className="nav-link" to="">
                  Video
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Messages">
                  Messages
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
