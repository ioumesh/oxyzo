import React from "react";
import { chipsData } from "../../data/constant";
import "./chips.scss"
const Chips = () => {
  return (
    <>
      {chipsData.map((chip, index) => {
        return (
          <div className="chip-container">
            <img src={chip.src} alt="icons" />
            <span>{chip.title}</span>
          </div>
        );
      })}
    </>
  );
};

export default Chips;
