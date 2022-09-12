import React from "react";
import Card from "./NewsCard";
import sd from "./NewsData";
// import sd from "./data";

const Services = () => {
  return (
    <div className="container" id="mylatestNews">
      <div className="row gap-4 mb-5">
        <div className="title row justify-content-between">
          <p>
            <strong>Latest News</strong>
          </p>
          
        </div>
   
        {sd.map((serviceData) => {
          const { id, title, info, image, action ,slug} = serviceData;
          return <Card key={id} info={info} image={image} action={action} slug={slug}/>;
        })}

        
      </div>
    </div>
  );
};
export default Services;
