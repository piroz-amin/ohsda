import React from "react";
import {
  FaSuperpowers,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";

const Stats = () => {
  return (
    <div className="row slideanim container m-auto my-5">
      <div className="container bg-grey" style={{ backgroundColor: "#be2126" }}>
        <div class="row  " id="stats">
          <div class="col-sm-4">
            <div>
              <h1>
                <FaSuperpowers id="statsIcon" /> 100 People Empowered
              </h1>
            </div>
          </div>
          <div class="col-sm-4">
            <h1 className=""> 
              <FaUsers id="statsIcon" />
              10+ Humanitarian Experts
            </h1>
          </div>
          <div class="col-sm-4">
            <h1>
              <FaWarehouse id="statsIcon" /> 5 Regional Offices
            </h1>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Stats;
