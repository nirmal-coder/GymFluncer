import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

import "./index.css";
const Header = () => {
  const [navToggle, setToggle] = useState(false);
  return (
    <>
      <nav className="Header__sm">
        <img src="/logo.png" alt="logo" className="Header__sm--logo" />
        <FaBarsStaggered
          className="Header__sm--icon"
          onClick={() => setToggle((prev) => !prev)}
        />
      </nav>
      {navToggle && (
        <ul className="Header__sm--navItem">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Blogs">Blogs</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      <div className="Header__lg">
        <img src="/logo.png" alt="logo" className="Header__sm--logo" />
        <p>
          <a href="#Home">Home</a>
        </p>
        <p>
          <a href="#About">About</a>
        </p>
        <select>
          <option value="Workout plan">Workout plan</option>
          <option value="Diet Plan">Diet Plan</option>
        </select>
        <p>
          <a href="#Blogs">Blogs</a>
        </p>
        <p>
          <a href="#Contact">Contact</a>
        </p>
        <button>Join us now</button>
      </div>
    </>
  );
};

export default Header;
