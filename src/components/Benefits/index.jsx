import React from "react";
import "./index.css";

const Benefits = () => {
  return (
    <div className="benefits">
      <div
        className="benefits__badge"
        data-aos="zoom-out-up"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="/o8k4hpBGZSqpjSgLI7W0kJLJuw4.svg fill.png" alt="star" />
        <h3>Our Benefits</h3>
      </div>
      <div
        className="benefits__content"
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <h2>Discover GymFluencer Benefits</h2>
        <p>
          Unlock your full potential with GymFluencer your personal fitness
          partner for progress and motivation
        </p>
      </div>
      <div className="benefits__card">
        <img src="/Container.png" alt="phone" className="phone  phone-sm" />
        <div className="benefits__card--cards">
          <div className="box-1">
            <div
              className="benefits__card--cardsItem"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="5"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                src="https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg"
                alt="icons"
              />
              <h4>Effortless Workout Logging</h4>
              <p>
                Easily log your workouts and monitor your progress over time
                with our intuitive logging feature.
              </p>
            </div>
            <div
              className="benefits__card--cardsItem"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="5"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                src="https://framerusercontent.com/images/o8k4hpBGZSqpjSgLI7W0kJLJuw4.svg"
                alt="icons"
              />
              <h4>Personalized Workout Plans</h4>
              <p>
                AI-powered workout plans tailored to your fitness level, goals,
                and progress.
              </p>
            </div>
          </div>
          <img
            src="/Container.png"
            alt="phone"
            className="phone  phone-lg"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="5"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
          <div className="box-2">
            <div
              className="benefits__card--cardsItem"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="5"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                src="https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg"
                alt="icons"
              />
              <h4>Accurate Rep Counting</h4>
              <p>
                Count your reps accurately with our app, ensuring consistency
                and improved performance.
              </p>
            </div>
            <div
              className="benefits__card--cardsItem"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="5"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                src="https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg"
                alt="icons"
              />
              <h4>Calorie Calculation & Personalized Diet Plans</h4>
              <p>
                Calculate calories burned during workouts and AI-customized meal
                plans for optimal nutrition and wellness{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits__5start_con">
        <div
          className="benefits__5start"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="text_content">
            <h3>Your Personalized Fitness Hub</h3>
            <div>
              <p>
                Personalized workout routines tailored to your goals and
                preferences
              </p>
              <p>
                Get expert guidance with virtual coaching sessions, available
                anytime, anywhere.
              </p>
              <p>
                Track your fitness journey with detailed analytics, goal
                setting, and achievements.
              </p>
            </div>
          </div>
        </div>
        <div
          className="benefits__5Start_options"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/sample-1.avif" alt="sample-plan" />
        </div>
      </div>

      <marquee loop="infinite">
        {" "}
        Fitness Plans · Workout Routines · Progress Tracking Fitness Plans ·
        Workout Routines · Progress Tracking Fitness Plans · Workout Routines ·
        Progress Tracking Fitness Plans · Workout Routines · Progress Tracking
        Fitness Plans · Workout Routines · Progress Tracking Fitness Plans ·
        Workout Routines · Progress Tracking
      </marquee>
    </div>
  );
};

export default Benefits;
