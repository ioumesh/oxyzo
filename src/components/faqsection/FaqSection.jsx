import React, { useState } from "react";
import "./faqsection.scss";
import FaqItem from "./FaqItem";
import "./faqsection.scss";
import Heading from "../heading/Heading";
const FaqSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section">
      <Heading title={"Frequently Asked Questions"} />
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default FaqSection;
