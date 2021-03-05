import React from "react";

const Purchase = () => {
  return (
    <div className="purchase">
      <div className="purchase_description">
        <h1>Purchase Anytime</h1>
        <p>
          I am not really sure how old I was when I got the gift for Christmas,
          but I remember thinking it was a pretty impressive piece of electronic
          hardware. It was really cool looking
        </p>
        <button className="btn"> Apply for card</button>
      </div>
      <div className="purchase_img">
        <img src="./assets/phone_card.jpg" alt="phone_card" />
      </div>
    </div>
  );
};

export default Purchase;
