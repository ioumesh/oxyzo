import React from "react";
import "./heading.scss";
const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="heading">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Heading;
