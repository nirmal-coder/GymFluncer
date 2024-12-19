import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
import "./index.css";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__content">
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          Your Fitness.
          <br />
          Our Mission.
        </h1>
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
          At GymFluencer, our mission is simple: to provide the tools and
          support you need to reach your fitness goals. We combine innovative
          technology with personalized guidance to make fitness easier, more
          accessible, and more motivating. Join us as we help you transform your
          fitness journey, one workout at a time.
        </p>
      </div>

      <div
        className="about__statics"
        data-aos="zoom-out-up"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div>
          <h2>463k+</h2>
          <p>Workouts logged and progress tracked every month</p>
        </div>
        <div>
          <h2>163k+</h2>
          <p>Fitness enthusiasts connected through our platform</p>
        </div>
        <div>
          <h2>13+</h2>
          <p>Countries where GymFluencer is making an impact</p>
        </div>
      </div>

      <div
        className="about__popup--video"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <Popup
          trigger={
            <div className="popup_trigger">
              <img src="/popupImage.avif" alt="popupimage" />
              <FaRegCirclePlay className="popup__playIcon" />
            </div>
          }
          modal
          nested
        >
          <ReactPlayer
            url="https://youtu.be/pznrAWMhahA"
            controls
            width="100%"
          />

          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default About;
