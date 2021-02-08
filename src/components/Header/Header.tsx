import React from "react";
import "./Header.scss";
import logo from "../../commonFiles/logo.png";

export const Header = () => (
  <div className="header-container">
    <div className="text-logo">
      <img src={logo} alt="logo" className="logo" />
      <div className="logo-container">
        <div className="requestum">requestum</div>
        <div className="text">web development company</div>
      </div>
    </div>
    <div>Github users search app</div>
  </div>
);
