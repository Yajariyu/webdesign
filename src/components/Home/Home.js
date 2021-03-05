import React, { useState } from "react";
import Header from "../../ui/Header";
import Choose from "./Choose";
import FooterMenu from "./FooterMenu";
import Purchase from "./Purchase";
import ServicesSection from "./ServicesSection";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="header">
        <Header toggle={toggle} setToggle={setToggle} />
        <div className={`header_description ${toggle ? "show" : "hidden"}`}>
          <h1>Be Smart Take Card</h1>
          <p className="header_description_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
            assumenda aliquid non rem eum. Tenetur alias rem soluta quas neque
            eveniet accusamus perspiciatis hic, optio repellat odio tempore
            quaerat sint.
          </p>
          <div>
            <button className="btn">Apply for Card</button>
          </div>
        </div>
      </div>
      <div className="card_unique_img">
        <img src="./assets/card_first.jpg" alt="card_img" />
      </div>
      <ServicesSection />
      <Purchase />
      <Choose />
      <FooterMenu />
    </>
  );
};

export default Home;
