import React from "react";
import Navbar from "../components/Navbar";
import LatestNews from "../components/LatestNews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
function Post() {
    const {slug} = useParams();
  return (
    <>
      <Navbar />

    <section className="container" style={{marginTop:"100px"}}>
      {/* insert your post here */}
      <h3>Heladsjk'f </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at facere reprehenderit, nam maxime saepe dignissimos, consequuntur cumque voluptate illo laudantium enim harum officia atque ex vel nostrum expedita doloribus. Vitae qui nulla ipsum vel dolorem odio, inventore, sunt sit, consequatur placeat sequi. Cupiditate similique eveniet iure ab, eaque incidunt voluptatem reiciendis temporibus, debitis delectus ducimus maiores nesciunt et. Expedita!
        </p>
    </section>

      <LatestNews />
      <Contact />
      <Footer />
    </>
  );
}

export default Post;
