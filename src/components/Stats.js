import React from "react";
import { FaSuperpowers, FaUsers, FaWarehouse } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="row slideanim">
      <div className="container bg-grey" style={{ backgroundColor: "#be2126" }}>
        <div class="row  " id="stats">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div>
              <h1>
                <FaSuperpowers id="statsIcon" />{" "}
                <span style={{ padding: "5px" }}>
                  <strong>100+ People Empowered</strong>
                </span>
              </h1>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <h1>
              <FaUsers id="statsIcon" />
              <span style={{ padding: "5px" }}>
                <strong>20+ Humanitarian Experts</strong>
              </span>
            </h1>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <h1>
              <FaWarehouse id="statsIcon" />{" "}
              <span style={{ padding: "5px" }}>
                <strong>5 Regional Offices</strong>
              </span>
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
