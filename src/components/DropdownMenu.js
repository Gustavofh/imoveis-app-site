// src/components/HamburgerMenu.js
import React, { useState } from "react";
import "../templatesCss/dropdown-menu.css"; 

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={handleMenuClick}>Menu</button>
      {isMenuOpen && (
        <div className="menu-content">
          <ul>
            <li>Favoritos</li>
            <li>Pesquisar</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
