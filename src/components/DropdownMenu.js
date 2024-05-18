// src/components/HamburgerMenu.js
import React, { useState } from "react";
import "./HamburgerMenu.css"; // Estilos para o menu

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={handleMenuClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
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
