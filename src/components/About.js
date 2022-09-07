import React from "react";
import Moto from "../assets/images/Moto.svg";
import Stats from "./Stats";
const About = () => {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="title">
          <p>
            <strong>OHSDA</strong>
          </p>
        </div>
        <div className="col-md-4 ">
          <img src={Moto} />
        </div>
        <div className="col-md-8 info">
          <p>
            <strong>OHSDA</strong> - Organization of Humanitarian Services for
            Development of Afghanistan is a non-government, non-profit,
            humanitarian organization operating in Afghanistan to empower the
            people in need. OHSDA provides health and social Services, and
            initiatively works to empower the most vulnerable people of the
            world.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
