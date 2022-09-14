import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import Moto from "../assets/images/Moto.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="fixed-top">
      <div className="nav-center " id="nav-header">
        <div className="nav-header " id="nav-header">
          <img src={Moto} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links gap-2 p-4" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
<<<<<<< HEAD
                <li key={id}>
                  <a href={url}>{text}</a>
=======
                <li key={id} className="mb-4">
                  <Link to={url}>{text}</Link>
                  {/* <Link to={url}>{text}</Link> */}
>>>>>>> 417e224249970500cc3048448c37b0baaec40232
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons gap-2">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
