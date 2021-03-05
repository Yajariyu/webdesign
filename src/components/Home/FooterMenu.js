import React from "react";

const FooterMenu = () => {
  const handleToogle = (e) => {
    const list = e.target.nextSibling;
    list.classList.toggle("show");
    list.classList.toggle("hidden");
  };

  return (
    <div className="menu">
      <div className="menu_list">
        <h2 onClick={handleToogle}>Products</h2>
        <div className="menu_list_links hidden">
          <li>About us</li>
          <li>Carrers</li>
          <li>Feature Tour</li>
        </div>
      </div>
      <div className="menu_list">
        <h2 onClick={handleToogle}>Products</h2>
        <div className="menu_list_links hidden">
          <li>About us</li>
          <li>Carrers</li>
          <li>Feature Tour</li>
        </div>
      </div>
      <div className="menu_list">
        <h2 onClick={handleToogle}>Products</h2>
        <div className="menu_list_links hidden">
          <li>About us</li>
          <li>Carrers</li>
          <li>Feature Tour</li>
        </div>
      </div>
      <div className="menu_list">
        <h2>News Letter</h2>
        <form action="" class="menu_form">
          <div className="menu_form_input">
            <input type="text" placeholder="Email adress" />
            <div className="menu_form_btn">
              <i class="fas fa-paper-plane"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterMenu;
