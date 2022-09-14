import React from "react";
import globeIcon from "../assets/images/globeIcon.svg";
import { FaGlobeAsia } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="row slideanim" id="contact">
      <div className="container">
        <div class="row">
          <div class="col-sm-4">
            <img
              src={globeIcon}
              style={{ width: "200px", paddingBottom: "40px" }}
            />
          </div>
          <div class="col-sm-7">
            <p>
              <strong>Main Office </strong>
              <br />
              <br />
              Second floor, Maiwand Plaza, Gul-e Surkh Square, 1001 Kabul
              Afghanistan
              <br />
              <br />
              <strong> Email </strong>
              info@ohsda.af
              <br />
              <strong> Telephone </strong>
              +93 (0) 70 229 2174
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
