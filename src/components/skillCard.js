import React, { useState } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BsBraces } from "react-icons/bs";
const Card = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [changeState, setChangeState] = useState(true);
  const handleState = () => {
    if (!changeState) {
      setShowInfo(false);
      setChangeState(true);
    }
    if (changeState) {
      setShowInfo(true);
      setChangeState(false);
    }
  };
  return (
    <article className="question">
      <header>
        <BsBraces className="card-icon" />
        {title}
        <div className="btn-card" onClick={() => handleState()}>
          {changeState ? (
            <FaArrowDown className="card-icon" />
          ) : (
            <FaArrowUp className="card-icon" />
          )}
        </div>
      </header>
      {showInfo && <div className="info">{info}</div>}
    </article>
  );
};
export default Card;
