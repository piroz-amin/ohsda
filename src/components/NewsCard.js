import React from "react";

import sd from "./NewsData";
const Card = ({ id, title, info, image, action }) => {
  return (
    <div key={id} className="card col-sm-3">
      {<img className="card-img-top" src={image} alt="image"></img>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{info}</p>
        <a href="#" className="btn btn-secondary">
          {action}
        </a>
      </div>
    </div>
  );
};
export default Card;
