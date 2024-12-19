import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <div
      className="footer"
      id="Contact"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="5"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <img src="/logo.png" alt="logo" />
      <p>Where Fitness Meets Social Connection!</p>
      <div className="email">
        <a href="">hello@gym.birlaventures.com</a>
      </div>
      <div className="footer_nav">
        <a href="#Home">Home</a>
        <a href="#Home">Workout Plan</a>
        <a href="#Home">Diet Plan</a>
        <a href="#Faq">Faq</a>
      </div>
      <hr />
      <div className="social">
        <p>© 2024 GymFluencer. All rights reserved.</p>
        <div>
          <FaLinkedin className="social-logo" />
          <FaInstagram className="social-logo" />
          <FaXTwitter className="social-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
