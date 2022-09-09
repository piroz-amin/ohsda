import React from "react";

const Card = ({ id, title, info, image, action }) => {
  return (
    <div key={id} className="card col-sm-3">
      {<img className="card-img-top" src={image}></img>}
      <div className="card-body">
        <p className="card-text">{info}</p>
        <a href="#" className="btn btn-secondary">
          {action}
        </a>
      </div>
    </div>
  );
};
export default Card;
