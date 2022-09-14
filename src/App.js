import React from "react";
<<<<<<< HEAD
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
=======
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Post from "./pages/Post";

>>>>>>> 417e224249970500cc3048448c37b0baaec40232
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import GirlsSchool from "./pages/GirlsSchool";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:slug" element={<Post />} />
<<<<<<< HEAD
          <Route path="/girlsSChool" element={<GirlsSchool />} />
          <Route path="*" element={<NotFound />} />
=======
>>>>>>> 417e224249970500cc3048448c37b0baaec40232
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
