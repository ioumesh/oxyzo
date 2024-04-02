// Navbar.js
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const menuData = [
    {
      label: "SME Financing",
      url: "/",
      submenu: [
        {
          label: "Mission",
          url: "/about/mission",
        },
        {
          label: "Team",
          url: "/about/team",
        },
      ],
    },
    {
      label: "Corporate Financing",
      url: "/about",
      submenu: [
        {
          label: "Mission",
          url: "/about/mission",
        },
        {
          label: "Team",
          url: "/about/team",
        },
      ],
    },
    {
      label: "Partner with Us",
      url: "/contact",
    },
    {
      label: "About Us",
      url: "/services",
      submenu: [
        {
          label: "Web Development",
          url: "/services/web-development",
        },
        {
          label: "Graphic Design",
          url: "/services/graphic-design",
        },
        {
          label: "SEO",
          url: "/services/seo",
        },
      ],
    },
  ];

  const renderMenu = (menu) => {
    if (menu.submenu) {
      return (
        <div className="menu-item" key={menu.label}>
          <span>{menu.label}</span>
          <span className="arrow-down">&#9660;</span>
          <div className="submenu">
            {menu.submenu.map((item, index) => (
              <a key={index} href={item.url} className="submenu-item">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <a href={menu.url} className="menu-item" key={menu.label}>
          {menu.label}
        </a>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-icon">
          <img
            src="https://d5nfy7n2jvqm2.cloudfront.net/fe-imgs/new_design/oxyzo-logo-new-01.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-menu">
          {menuData.map((menu) => renderMenu(menu))}
        </div>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
