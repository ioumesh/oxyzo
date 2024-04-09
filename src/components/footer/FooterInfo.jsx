import React from "react";
import "./footerinfo.scss";
import { footerInfo } from "../../data/constant";
const FooterInfo = () => {
  const { companyName, address, menuLinks, socialMedia, storeIcon } =
    footerInfo;

  return (
    <div className="footerinfo">
      <div className="footer-left">
        <p>{companyName}</p>
        <p>(Formerly Known as OXYZO Financial Services Private Limited)</p>
        <p className="logo">
          Part of Logo
          <img
            src="https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/ofb-logo-green.webp"
            alt="logo"
          />
        </p>
        <p>{address}</p>
      </div>
      <div className="footer-middle">
        {menuLinks.map((menu, index) => (
          <div key={index}>
            <h3>{menu.title}</h3>
            <ul className="footer-item">
              {menu.links.map((link, idx) => (
                <li className="footer-list" key={idx}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-right">
        <h3>FOLLOW US</h3>
        <div className="social-icons">
          {socialMedia.map((social, index) => (
            <a key={index} href={social.url}>
              <img className="icons" src={social.src} alt="icons" />
            </a>
          ))}
        </div>
        <div className="store-icons">
          {storeIcon.map((icon, index) => {
            return (
              <img className="icons" key={index} src={icon.url} alt="icons" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
