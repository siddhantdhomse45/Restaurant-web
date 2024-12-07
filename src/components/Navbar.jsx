import React, { useRef } from "react";
import Logo from "../assets/logo.png"; // Ensure this path is correct
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is installed

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={Logo} alt="Logo" />
      </a>
      <nav className="navbar" ref={navbarRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>
      <div className="icons">
        <i className="fas fa-search" id="search-btn" onClick={searchHandler}></i>
        <i className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler}></i>
        <i className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></i>
      </div>
    </header>
  );
};

export default Navbar;
