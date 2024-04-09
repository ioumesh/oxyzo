import React from "react";
import "./whyoxyzo.scss";
import Heading from "../heading/Heading";
import "./whyoxyzo.scss";
import Chips from "../chips/Chips";

const WhyOxyzo = () => {
  return (
    <div>
      <Heading title={"Why Oxyzo?"} />
      <div className="why-conatiner">
        <p className="why-text">
          Oxyzo provides new-age customized financing products for your business
          needs
        </p>
        <div className="why-wrapper">
          <Chips />
        </div>
      </div>
    </div>
  );
};

export default WhyOxyzo;
