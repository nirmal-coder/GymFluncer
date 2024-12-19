import React from "react";
import { CiCalendar } from "react-icons/ci";
import "./index.css";

const Blogs = () => {
  return (
    <div className="blogs" id="Blogs">
      <h2>our latest blogs</h2>
      <div className="blog_card_con">
        <div
          className="blog_card blog_bg1"
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div>
            <button type="button" className="blog_btn btn-red">
              Exercise
            </button>
            <h3>
              Conquering Consistency: How to Make Exercise a Habit You Love
            </h3>
            <div className="blog_date">
              <div className="date">
                <CiCalendar />
                <p>Jun 28, 2024</p>
              </div>
              <div className="avater">
                <img src="/blog-avatar-1.png" alt="avater" />
                <p>Benjamin</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="blog_card blog_bg2"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div>
            <button type="button" className="blog_btn btn-orange">
              Weight loss
            </button>
            <h3>Weight Loss: A Sustainable Approach for a Healthier You</h3>
            <div className="blog_date">
              <div className="date">
                <CiCalendar />
                <p>Jun 26, 2024</p>
              </div>
              <div className="avater">
                <img src="/blog-avatar-2.png" alt="avater" />
                <p>Jessica</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="blog_card blog_bg3"
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div>
            <button type="button" className="blog_btn btn-green">
              Nutrition
            </button>
            <h3>
              Fuel Your Fitness: A Guide to Nutrition for Peak Performance
            </h3>
            <div className="blog_date">
              <div className="date">
                <CiCalendar />
                <p>Jun 23, 2024</p>
              </div>
              <div className="avater">
                <img src="/blog-avatar-3.png" alt="avater" />
                <p>David</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
