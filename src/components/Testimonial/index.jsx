import React from "react";
import { IoIosStar } from "react-icons/io";
import "./index.css";
const Testimonial = () => {
  return (
    <div
      className="Testimonial"
      id="Benefits"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="5"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div>
        <h2>What people say</h2>
      </div>
      <div className="testimonial_scroller">
        <div
          className="testimonial_card"
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/test-1.avif" alt="testimonial" />
          <div className="testimonial_des">
            <div className="star">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <p>
              I love how user-friendly the app is. Logging workouts has never
              been easier!“
            </p>
            <p>
              Michael Field <br /> -- Software engineer
            </p>
          </div>
        </div>
        <div
          className="testimonial_card"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/test-2.avif" alt="testimonial" />
          <div className="testimonial_des">
            <div className="star">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <p>
              I love how user-friendly the app is. Logging workouts has never
              been easier!“
            </p>
            <p>
              Michael Field <br /> -- Software engineer
            </p>
          </div>
        </div>
        <div
          className="testimonial_card"
          data-aos="flip-down"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/test-3.avif" alt="testimonial" />
          <div className="testimonial_des">
            <div className="star">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <p>
              GymFluencer has transformed the way I work out. The rep counting
              feature is a game-changer!
            </p>
            <p>
              Angelia Jolie
              <br /> -- modal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
