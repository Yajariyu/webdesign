import React from "react";
import Nav from "./Nav";

const Header = ({ toggle, setToggle, bg = "" }) => {
  return (
    <div className={bg}>
      <nav className="nav">
        <a href="/#">
          <img src="../../assets/logo.png" alt="logo" className="logo" />
        </a>
        <Nav toggle={toggle} setToggle={setToggle} />
      </nav>
    </div>
  );
};

export default Header;
