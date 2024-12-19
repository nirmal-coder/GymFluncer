import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import "./index.css";

const Faq = () => {
  const faqArray = [
    {
      qusetion: "How do I log my workouts?",
      answer:
        "You can easily log gour workouts by selecting the exercise, entering the duration, and tracking your reps.",
      isOpen: false,
    },
    {
      qusetion: "Can I track my calories bumed? ",
      answer:
        "Yes, gou can track calories burned through the application integrated tracking features.",
      isOpen: false,
    },
    {
      qusetion: "Is this application sLAtable for beginners? ",
      answer:
        "Absolutely! GgmFIuencer is designed to be user-friendly and suitable for all fitness levels.",
      isOpen: false,
    },
    {
      qusetion: "What features does the application offer?",
      answer:
        "he app offers workout logging, rep counting, calorie tracking, and progressreviews.",
      isOpen: false,
    },
    {
      qusetion: "w can I reset my password? ",
      answer:
        "can reset gour password by going to the login screen and selecting Forgot Password.",
      isOpen: false,
    },
  ];

  const [faqList, changeList] = useState(faqArray);

  const changeSelect = (q) => {
    changeList((prev) =>
      prev.map((each) =>
        each.qusetion === q ? { ...each, isOpen: !each.isOpen } : each
      )
    );
  };
  return (
    <div className="Faq" id="Faq">
      <h2>
        FREQUENTLY frequently
        <br />
        ASKED QUESTIONS
      </h2>
      {faqList.map((each) => (
        <div
          className="faq_card"
          key={each.qusetion}
          onClick={() => changeSelect(each.qusetion)}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="5"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="faq_card-header">
            {each.isOpen ? (
              <RxCross2 className="plus" />
            ) : (
              <FaPlus className="plus" />
            )}

            <h3>{each.qusetion}</h3>
          </div>

          {each.isOpen && <p>{each.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
