import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import HomeComponent from "../components/Home";
import LatestNews from "../components/LatestNews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Stats from "../components/Stats";
import work from "../components/work";
function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <About />
      <Stats />
      <Services />
      <LatestNews />
      <work />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
