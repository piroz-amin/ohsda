import React from "react";
import Card from "./NewsCard";
import sd from "./NewsData";
// import sd from "./data";

const Services = () => {
  return (
    <div className="container" id="mylatestNews">
      <div className="row">
        <div className="title">
          <p>
            <strong>Latest News</strong>
          </p>
        </div>
        {sd.map((serviceData) => {
          const { id, title, info, image, action } = serviceData;
          return (
            <Card
              key={id}
              title={title}
              info={info}
              image={image}
              action={action}
            />
          );
        })}

        <button id="seeallnews">
          <p>See All news</p>
        </button>
      </div>
    </div>
  );
};
export default Services;
