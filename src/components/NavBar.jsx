import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
