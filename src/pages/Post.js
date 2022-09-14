import React from "react";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import girl from "../assets/images/girl.jpg";
import { posts } from "../data/posts";

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(() => {
      const data = posts.filter((p) => p.slug === slug);
      return data[0];
    });
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="">
        <h1>{post?.slug}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.body }}></div>
      </div>
      <div>
        <div className="row solidanim">
          <div className="body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              esse architecto sed sequi maiores cupiditate eveniet rerum
              laudantium sunt modi tempora nemo quibusdam molestias nisi minus
              accusamus earum, eligendi libero! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam quis adipisci quas temporibus
              sapiente, veritatis officia esse ipsum officiis quae? Mollitia sit
              officiis incidunt nemo alias similique, ullam laudantium harum.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              repellendus sequi eos, iste tempore, accusantium, consequatur
              omnis commodi atque modi animi delectus saepe vel qui unde quasi
              similique culpa porro?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              esse architecto sed sequi maiores cupiditate eveniet rerum
              laudantium sunt modi tempora nemo quibusdam molestias nisi minus
              accusamus earum, eligendi libero! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam quis adipisci quas temporibus
              sapiente, veritatis officia esse ipsum officiis quae? Mollitia sit
              officiis incidunt nemo alias similique, ullam laudantium harum.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              repellendus sequi eos, iste tempore, accusantium, consequatur
              omnis commodi atque modi animi delectus saepe vel qui unde quasi
              similique culpa porro?
            </p>
            <img src={girl} />
          </div>
        </div>
      </div>
=======
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
>>>>>>> 417e224249970500cc3048448c37b0baaec40232
      <Footer />
    </>
  );
}

export default Post;
