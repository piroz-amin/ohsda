import React from "react";
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
      <Footer />
    </>
  );
}

export default Post;
