import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <div className="card_img">{img}</div>
      <h1 className="card_title">{title}</h1>
      <div className="card_description">{description}</div>
    </div>
  );
};

export default Card;
