import React from "react";
import Card from "../card/Card";
import Heading from "../heading/Heading";
import "./termloan.scss";

const TermLoan = () => {
  const handleViewMore = () => {
    console.log("View more clicked!");
  };
  const cardData = [
    {
      title: "Business Loan",
      desc: "Effortlessly expand your business",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/bag.png",
    },
    {
      title: "Machinery Finance",
      desc: "Meet your capex needs and grow your business",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/setting.png",
    },
    {
      title: "Loan Against Property",
      desc: "Expand by leveraging your property",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/bank.png",
    },
 
  ];
  return (
    <>
      <Heading
        title={"Term Loans"}
        subtitle={
          "Fund your business expansion with our long-term financing solutions"
        }
      />
      <div className="term-container">
        {cardData.map((card, index) => {
          return (
            <Card
              key={`card-${index}`}
              title={card.title}
              description={card.desc}
              src={card.icon}
              onViewMore={handleViewMore}
            />
          );
        })}
      </div>
    </>
  );
};

export default TermLoan;
