import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../img/OwlLogoTrans.png";
export const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div
        className="navbar-container"
        onMouseEnter={props.onHover}
        onMouseLeave={props.onOut}
      >
        <ul className="nav-bar">
          {props.tabs.map((tab, i) => {
            return (
              <li key={i}>
                <Link to={tab.link} className="navbar-item">
                  {tab.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <div className="menu-icon" onClick={props.onClick}>
          {props.clicked ? "true" : "false"}
        </div> */}
      </div>
    </nav>
  );
};
