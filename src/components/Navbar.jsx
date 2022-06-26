import React from "react";
import { Link } from "react-router-dom";
import { GrBitcoin } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Link style={{ textDecoration: "none", color: "#f4f4f4" }} to="/">
      <div className="navbar">
        <GrBitcoin className="icon" />
        <h1>
          Coin{""}
          <span className="purple"> Stack</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
