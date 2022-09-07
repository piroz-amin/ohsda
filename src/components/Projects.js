import React from "react";
import Card from "./projectsCard";

function Project() {
  return (
    <section className="container">
      <div className="row">
        <div className="title">
          <p>Projects I have worked</p>
          <div className="underline"></div>
        </div>
        <Card />
      </div>
    </section>
  );
}

export default Project;
