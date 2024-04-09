import React from "react";
import "./navbar.scss";
import { menuData } from "../../data/constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  const renderMenu = (menu) => {
    if (menu.submenu) {
      return (
        <div className="menu-item" key={menu.label}>
          <span>{menu.label}</span>
          <span className="arrow-down">&#9660;</span>
          <div className="submenu">
            {menu.submenu.map((item, index) => (
              <Link key={index} to={item.url} className="submenu-item">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <Link to={menu.url} className="menu-item" key={menu.label}>
          {menu.label}
        </Link>
      );
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-icon">
            <Link to={"/"}>
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/fe-imgs/new_design/oxyzo-logo-new-01.svg"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">
            {menuData.map((menu) => renderMenu(menu))}
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
