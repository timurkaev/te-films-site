import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo">FilmPro</div>
      <div className="search">
        <input type="text" placeholder="Поиск..." />
      </div>
      <button className="user">
        <span className="material-icons">person</span>
      </button>
    </div>
  );
}

export default Header;
