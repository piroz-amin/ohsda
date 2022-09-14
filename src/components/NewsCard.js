import React from "react";
import { Link } from "react-router-dom";
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
        </Link>
      </div>
    </div>
  );
};
export default Card;
