import React from "react";

import Empowerment from "../assets/images/empowerment.png";
import Social from "../assets/images/SocialServices.png";
import Health from "../assets/images/Health.png";
import {
  FaBell,
  FaChalkboardTeacher,
  FaChevronCircleUp,
  FaChild,
  FaFistRaised,
  FaHandHoldingHeart,
  FaHandHoldingUsd,
  FaHandPeace,
  FaHandPointUp,
  FaHandshake,
  FaHandsHelping,
  FaHeartbeat,
  FaHighlighter,
  FaHireAHelper,
  FaKhanda,
  FaNetworkWired,
  FaOldRepublic,
  FaPrayingHands,
  FaRegHandshake,
  FaResolving,
  FaSeedling,
  FaShare,
  FaShekelSign,
  FaStackExchange,
  FaSuperpowers,
  FaTrain,
} from "react-icons/fa";
const Services = () => {
  return (
    <div className="container" id="myServices">
      <div className="row d-flex justify-content-center">
        <div className="title">
          <p>
            <strong>Our Services</strong>
          </p>
        </div>
        <div className="card col-sm-3" id="Servicecard">
          <FaHandHoldingHeart
            className="card-img-top"
            style={{ color: "#be2126", fontSize: "150px" }}
          />

          <p className="card-text">
            <strong>Health</strong>
          </p>
        </div>

        <div className="card col-sm-3" id="Servicecard">
          <FaBell
            className="card-img-top"
            style={{ color: "#be2126", fontSize: "100px" }}
          />

          <p className="card-text">
            <strong>Emergency Response</strong>
          </p>
        </div>

        <div className="card col-sm-3" id="Servicecard">
          <FaHandshake
            className="card-img-top"
            style={{ color: "#be2126", fontSize: "200px" }}
          />

          <p className="card-text">
            <strong>Empowerment</strong>
          </p>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <ul className="col-md-4 col-lg-4" id="#serviceCardinfo">
          <p>Take a look inside </p>
          <div className="title">
            <p>What we do</p>
          </div>
          <p>
            OHSDA is operating in a wide range of services, ranging from health
            and social services, to empowerment activities.
          </p>
          <p>
            We believe that, by facilitating strategic humanitarian plans that
            are Smart, Measurable, Achievable, Relevant, and Timely, we can
            overcome the poverty, and provide a better living to the most
            vulnerable people of the world.
          </p>
        </ul>
        <ul className="col-xs-12 col-sm-6 col-md-4 " id="#serviceCardinfo">
          <li>
            <p>
              We are focused on empowerment of people in need through which a
              sustainable life is guaranteed especially in geographies where the
              unemployment rate is remarkable, and poverty is one step away.
            </p>
            <p>
              Our humanitarian professionals, are fully experienced working in
              high-risk environments as a result of political instability,
              economic crisis, security threats, and natural disasters to
              provide high-quality assistance that impact lives of many people.
            </p>
            <p>
              We partner with organizations to provide more effective services
              based on empowerment of people, which ultimately leads to improved
              outcomes for vulnerable communities.
            </p>
          </li>
        </ul>
        <ul className="col-xs-12 col-sm-6 col-md-4" id="#serviceCardinfo">
          <div class="list-group list-group-flush">
            <a class="list-group-item">
              <p>Capacity Strengthening</p>
            </a>
            <a class="list-group-item">
              <p>Education</p>
            </a>
            <a class="list-group-item">
              <p>Orphanage</p>
            </a>

            <a class="list-group-item">
              <p>
                Supporting Disable People With Professions Tailored to Their
                Abilities
              </p>
            </a>

            <a class="list-group-item">
              <p>Supporting Widows, and Women in Need</p>
            </a>
            <a class="list-group-item">
              <p>Farming (Cow/Sheep/Chicken)</p>
            </a>
            <a class="list-group-item">
              <p>Wells, Small Water Disturbution Networks</p>
            </a>

            <a class="list-group-item">
              <p>Humanitarian Emergency</p>
            </a>
          </div>
        </ul>
      </div>
      <div></div>
    </div>
  );
};
export default Services;
