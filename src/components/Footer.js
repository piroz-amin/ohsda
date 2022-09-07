import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Moto from "../assets/images/Moto.svg";
const Footer = () => {
  return (
    <div className="row slideanim">
      <div>
        <ul className="col-sm-4" id="footerInfo">
          <img src={Moto} />
        </ul>
        <ul className="col-sm-2" id="footerInfo">
          <li>
            <strong>Who we are</strong>
            <li>
              <br></br>
            </li>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <ul className="col-sm-2" id="footerInfo">
          <li>
            <strong>What we do</strong>
            <li>
              <br></br>
            </li>
          </li>
          <li>
            <a href="#myServices">Our Services</a>
          </li>
          <li>
            <a href="#mylatestNews">Latest News</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <ul className="col-sm-4" id="footerInfo">
          <li>
            <strong>About OHSDA</strong>
            <p>
              <li>
                <br></br>
              </li>
              OHSDA is a non-governoment, non-profit, humanitarian organization
              works for empowerment of the people in need.
            </p>
          </li>
          <li>
            <a href="#fb.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/ohsdafg">
              <FaTwitter />
            </a>
            <a href="#fb.com">
              <FaYoutube />
            </a>
            <a href="#fb.com">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <footer class="footer">
          <FaCopyright color="white" id="copyright-icon" />
          <p>
            <FaRegCopyright /> Copyright 2022. All Right Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
