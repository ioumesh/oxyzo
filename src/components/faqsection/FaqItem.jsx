// App.js
import React, { useState, useRef, useEffect } from "react";

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  const [setHeight, setHeightState] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    setHeightState(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={toggle}>
      <div className="faq-question">
        {question}
        <span className="toggle-indicator">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${setHeight}` }}
        className="faq-answer"
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
