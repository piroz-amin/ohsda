import React, { useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import people from "./data";
const Card = () => {
  const [index, setIndex] = useState(0);
  const { id, image, name, job, text } = people[index];
  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <section className="review">
      <div className="img-container">
        <img className="project-img" src={image}></img>
      </div>
      <h5>
        <button className="btn-left">
          <FaChevronLeft onClick={prevPerson} />
        </button>

        <button className="btn-right">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </h5>
      <h4 className="project-name">{job}</h4>
      <p className="info">{text}</p>
      <button className="random-btn">Demo</button>
    </section>
  );
};
export default Card;
