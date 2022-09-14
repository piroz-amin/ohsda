import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="center">
        <p>The is Not Found. Go back </p>
        <Link to="/">
          <p>Home </p>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default NotFound;
