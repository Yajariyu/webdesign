import React from "react";
import Card from "../../ui/Card";

const ServicesSection = () => {
  const objectCard = {
    img: <i className="fas fa-copy card_icon"></i>,
    title: "Application Online",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem cum aspernatur qui vel porro a dignissimos recusandae facere! Cu.",
  };
  return (
    <>
      <div className="services">
        <div className="services_title">
          <h1>Get your Card</h1>
          <p>
            Do you want to download free song for ipod? If so, reading this
            article could save you fro getting in to a lot of trouble!
          </p>
        </div>
        <Card {...objectCard} />
        <Card {...objectCard} />
        <Card {...objectCard} />
      </div>
    </>
  );
};

export default ServicesSection;
