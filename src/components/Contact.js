import React from "react";
import { FaBold } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="row slideanim" id="contact">
      <div className="container bg-grey" style={{ backgroundColor: "#be2126" }}>
        <div class="row">
          <div class="col-sm-4">
            <span
              class="glyphicon glyphicon-globe logo slideanim"
              style={{ color: "white" }}
            ></span>
          </div>
          <div class="col-sm-8">
            <h3>
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
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
