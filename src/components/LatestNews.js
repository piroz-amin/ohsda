import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/girl.jpg";

const Services = () => {
  return (
    <div className="container" id="mylatestNews">
      <div className="row">
        <div className="title">
          <p>
            <strong>Latest News</strong>
          </p>
        </div>

        <>
          <div className="card col-sm-3">
            {
              <img
                className="card-img-top"
                src={image}
                alt="Image of News"
              ></img>
            }
            <div className="card-body">
              <p className="card-text">
                <strong>Afghan girls want to go to school</strong>
              </p>
              <Link to="/post/afghan-girls" className="btn btn-danger">
                <h4>Read More</h4>
              </Link>
            </div>
          </div>
          <div className="card col-sm-3">
            {
              <img
                className="card-img-top"
                src={image}
                alt="Image of News"
              ></img>
            }
            <div className="card-body">
              <p className="card-text">
                <strong>Afghan girls want food</strong>
              </p>
              <a href="/girlsSChool" className="btn btn-danger">
                <h4>Read More</h4>
              </a>
            </div>
          </div>
          <div className="card col-sm-3">
            {
              <img
                className="card-img-top"
                src={image}
                alt="Image of News"
              ></img>
            }
            <div className="card-body">
              <p className="card-text">
                <strong>Afghan girls want work</strong>
              </p>
              <a href="/work" className="btn btn-danger">
                <h4>Read More</h4>
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
export default Services;
