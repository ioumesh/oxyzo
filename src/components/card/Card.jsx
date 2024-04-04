import React from "react";
import "./card.scss";

const Card = ({ title, description, onViewMore, src }) => {
  return (
    <div className="card" onClick={onViewMore}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="view-more">
        View More{" "}
        <span className="icon">
          <img src={src} alt="icon" />
        </span>
      </div>
    </div>
  );
};

export default Card;
