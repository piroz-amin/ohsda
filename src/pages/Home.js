import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import HomeComponent from "../components/Home";
import LatestNews from "../components/LatestNews";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Stats from "../components/Stats";
function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <About />
      <Stats />
      <Services />
      <LatestNews />

      <Contact />
      <Footer />
    </>
  );
}

export default Home;
