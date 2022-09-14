import React from "react";
<<<<<<< HEAD
import { FaSuperpowers, FaUsers, FaWarehouse } from "react-icons/fa";
=======
import {
  FaSuperpowers,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";
>>>>>>> 417e224249970500cc3048448c37b0baaec40232

const Stats = () => {
  return (
    <div className="row slideanim container m-auto my-5">
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
<<<<<<< HEAD
          <div class="col-sm-12 col-md-6 col-lg-4">
            <h1>
=======
          <div class="col-sm-4">
            <h1 className=""> 
>>>>>>> 417e224249970500cc3048448c37b0baaec40232
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
