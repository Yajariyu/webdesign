import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">@2017 Parag. All Right Reserved</div>
      <div className="footer_menu">
        <ul>
          <li>Shop</li>
          <li>Service</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer_social">
        <ul>
          <a href="/#"><li><i class="fab fa-facebook-f"></i></li></a>
          <a href="/#"><li><i class="fab fa-twitter"></i></li></a>
          <a href="/#"><li><i class="fab fa-google-plus-g"></i></li></a>
          <a href="/#"><li> <i class="fas fa-rss"></i></li></a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
