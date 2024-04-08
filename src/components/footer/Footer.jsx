import React from "react";
import { footerData } from "../../data/constant";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        {footerData.map((menu, index) => (
          <div className="menu-column" key={index}>
            <h3>{menu.title}</h3>
            <ul>
              {menu.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url}>
                    {link.label}
                    {link.isNew && <span className="new-badge">NEW</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
