import React from "react";
import Card from "../card/Card";
import Heading from "../heading/Heading";
import "./workingsection.scss";

const WorkingSection = () => {
  const handleViewMore = () => {
    console.log("View more clicked!");
  };
  const cardData = [
    {
      title: "Purchase Finance",
      desc: "Procure raw materials at the right price",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/truck.png",
    },
    {
      title: "Work Order  Finance",
      desc: "Now execute your tenders with ease",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/graph.png",
    },
    {
      title: "Invoice Discounting",
      desc: "Unlock your capital instantly",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/doc.png",
    },
    {
      title: "Vendor Finance",
      desc: "Strengthen your supply chain",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/profile.png",
    },
    {
      title: "Working Capital Term Loan",
      desc: "Fulfill your short-term finance needs",
      icon: "https://d5nfy7n2jvqm2.cloudfront.net/oxyzo-fe-imgs/refresh.png",
    },
  ];
  return (
    <>
      <Heading
        title={"Working Capital Finance"}
        subtitle={
          "Manage your cash flow shortfalls with our working capital financing solutions"
        }
      />
      <div className="card-container">
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

export default WorkingSection;
