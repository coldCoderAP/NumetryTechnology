import React from "react";
import "../css/Header.css"; // Import the CSS file
import { Search, ShoppingCart, AccountCircle, ExpandMore } from "@mui/icons-material";
import flipkartLogo from "../assets/flipkart-logo.png";  

<img src={flipkartLogo} alt="Flipkart" />


const Header = () => {
  return (
    <div className="header">
      {/* Flipkart Logo */}
      <div className="logo">
      <img src={flipkartLogo} alt="Flipkart" />

        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Flipkart_logo.png" alt="Flipkart" /> */}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
        <Search className="search-icon" />
      </div>

      {/* Login Button */}
      <div className="login">
        <AccountCircle className="icon" />
        <span>Login</span>
        <ExpandMore className="dropdown-icon" />
      </div>

      {/* More Options */}
      <div className="more">
        <span>More</span>
        <ExpandMore className="dropdown-icon" />
      </div>

      {/* Cart */}
      <div className="cart">
        <ShoppingCart className="icon" />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;
