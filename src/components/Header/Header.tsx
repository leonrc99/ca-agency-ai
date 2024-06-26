import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header" id="home">
      <nav className="nav">
        <img src={Logo} alt="" className="logo" />
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Início
          </Link>
          <Link className="nav-link" to="/contato">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
