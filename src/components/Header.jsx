import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header_logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
            alt="netflix"
          />
        </a>
      </div>
      <div className="header_user">
        <a href="/">
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
