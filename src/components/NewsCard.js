import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, info, image, action,slug }) => {
  return (
    <div key={id} className="card col-sm-3 cursor-pointer">
      {<img className="card-img-top" src={image}></img>}
      <div className="card-body">
        <p className="card-text">{info}</p>
        <Link to={`/post/${slug}`} className="btn btn-secondary">
          {action}
        </Link>
      </div>
    </div>
  );
};
export default Card;
