import React from "react";
import { Link } from "react-router-dom";
const Nav = ({ toggle, setToggle }) => {
  const toggleClass = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <ul className={toggle ? "hidden nav_ul" : "show nav_ul"}>
        <div className="nav_ul_list center">
          <li>Products</li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>Company</li>
        </div>
        <div className="nav_ul_list end">
          <li>Support</li>
          <li>Sign in</li>
        </div>
      </ul>
      <div className="icon" onClick={toggleClass}>
        <i class="fa fa-bars fa-lg"></i>
      </div>
    </>
  );
};

export default Nav;
