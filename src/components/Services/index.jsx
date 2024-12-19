import React from "react";
import "./index.css";

const Services = () => {
  return (
    <div className="services">
      <h2
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        Our services
      </h2>
      <p
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        GymFluencer offers 5 essential services to help you achieve your fitness
        goals with ease and flexibility.
      </p>

      <div
        className="services__banner-con"
        data-aos="zoom-out-up"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="services__banner b-1 b-radius">
          <h3
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Track
          </h3>
        </div>
        <div className="services__banner b-2 b-radius">
          <h3
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Analyze
          </h3>
        </div>
        <div className="services__banner b-3 b-radius">
          <h3
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Train
          </h3>
        </div>
        <div className="services__banner b-4 b-radius">
          <h3
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Connect
          </h3>
        </div>
        <div className="services__banner b-5 b-radius">
          <h3
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Challenge
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
