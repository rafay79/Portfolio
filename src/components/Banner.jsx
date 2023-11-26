/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhammad Abdul Rafay</h6>
            <h3>Python Developer</h3>
            <p>
            I am a passionate and enthusiastic Python developer with a strong background in programming
             and data analysis. I am proficient in using Python to develop web applications,
              data pipelines, and machine learning models. I am also experienced in working
               with a variety of Python frameworks, including Django, Flask,
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;