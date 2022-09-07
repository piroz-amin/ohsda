import React from "react";
import "../assets/css/home.css";

import afghanKid from "../assets/images/afghanKid.jpg";
import oldMan from "../assets/images/Oldman.webp";
import IDP from "../assets/images/refugee.webp";
import hunger from "../assets/images/fightforfood.jpeg";
import homlessGirl from "../assets/images/girl.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <section>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={oldMan} alt="Afghan Kid" width="1100" height="650" />
            </div>
            <div class="carousel-caption">
              <h3>Khost</h3>
              <h4>help us Wheat to Bread</h4>
            </div>
          </div>

          <div class="item">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={afghanKid} alt="New York" width="1100" height="650" />
            </div>
            <div class="carousel-caption">
              <h3>Kabul</h3>
              <h4>People are in emergency needs of Shelter</h4>
            </div>
          </div>
          <div class="item">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={IDP} alt="New York" width="1100" height="650" />
            </div>
            <div class="carousel-caption">
              <h3>Samangan</h3>
              <h4>People starving for educcation</h4>
            </div>
          </div>
          <div class="item">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={hunger} alt="New York" width="1100" height="650" />
            </div>
            <div class="carousel-caption">
              <h3>Balkh</h3>
              <h4>People are in need of Health</h4>
            </div>
          </div>
          <div class="item">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={homlessGirl} alt="New York" width="1100" height="650" />
            </div>
            <div class="carousel-caption">
              <h3>Maymana</h3>
              <h4>People needs Food and basic NFI</h4>
            </div>
          </div>
        </div>

        <a
          class="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
            style={{ color: "#be2126" }}
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};
export default Home;
