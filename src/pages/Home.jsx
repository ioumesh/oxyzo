import React from "react";
import FaqSection from "../components/faqsection/FaqSection";
import TermLoan from "../components/termloan/TermLoan";
import WorkingSection from "../components/workingsection/WorkingSection";
import WhyOxyzo from "../components/whysection/WhyOxyzo";
import { faqs } from "../data/constant";
import "../layout.scss";
const Home = () => {
  return (
    <div className="section-layout">
      <WorkingSection />
      <TermLoan />
      <WhyOxyzo />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default Home;
