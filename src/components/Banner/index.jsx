import React from "react";
import "./index.css";
import Header from "../Header";

const Banner = () => {
  return (
    <div className="Banner" id="Home">
      <Header />
      <div className="Banner__batch" data-aos="zoom-in-up">
        <img src="/batch1.png" alt="batch" />
        <img src="/batch2.png" alt="batch" className="Banner__batch--img" />
        <img src="/batch3.png" alt="batch" className="Banner__batch--img" />
        <h3>Trusted by 3+ million users</h3>
      </div>
      <div
        className="Banner__content"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>Track Your Fitness Journey</h1>
        <p>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </p>
      </div>
    </div>
  );
};

export default Banner;
