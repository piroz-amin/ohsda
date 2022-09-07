import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
import "./jobs.css";
const url = "https://course-api.com/react-tabs-project";
const Display = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
    console.log(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="loading">
        <h1>Loading...</h1>;
      </section>
    );
  }

  const { title, duties, dates, company } = jobs[value];
  return (
    <section>
      <div className="title">
        <h1>Experiences</h1>
        <div className="underline"></div>
      </div>
      <br></br>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                className="job-btn"
                key={item.id}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h2>{title}</h2>
          <h3>{company}</h3>
          <h4>{dates}</h4>
          <p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              );
            })}
          </p>
        </article>
      </div>
    </section>
  );
};
export default Display;
