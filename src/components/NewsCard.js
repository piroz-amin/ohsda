import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import image from "../assets/images/girl.jpg";
const Card = () => {
  return (
    <div className="card col-sm-3">
      {<img className="card-img-top" src={image} alt="Image of News"></img>}
      <div className="card-body">
        <p className="card-text">Afghan girls want to go to school</p>
        <Link
          to={`/post/afghan-girls-want-to-go-to-school}`}
          className="btn btn-danger"
        >
          Read More
=======

const Card = ({ id, title, info, image, action,slug }) => {
  return (
    <div key={id} className="card col-sm-3 cursor-pointer">
      {<img className="card-img-top" src={image}></img>}
      <div className="card-body">
        <p className="card-text">{info}</p>
        <Link to={`/post/${slug}`} className="btn btn-secondary">
          {action}
>>>>>>> 417e224249970500cc3048448c37b0baaec40232
        </Link>
      </div>
    </div>
  );
};
export default Card;
