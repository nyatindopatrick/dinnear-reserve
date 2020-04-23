import React from "react";
import { instructions, about } from "./data";
const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1 className="text-center">FIND YOUR NEAREST RESTAURANT OF CHOICE</h1>
        <div className="search-area">
          <h5>SEARCH BY KEYWORD</h5>
          <div className="input">
            <input className="form-control" type="search" name="search" />
            <span>
              <button className="btn btn-search">SEARCH</button>
            </span>
          </div>
        </div>
        <button className="btn btn-light my-4">How it works</button>
      </section>
      <section className="container steps py-5">
        <h2>DINNEAR WORKS IN FOUR DIFFERENT STEPS</h2>
        <div className="step-details">
          {instructions.map(({ header, image, body }, i) => (
            <div className="py-5" key={i}>
              <img src={image} alt="" />
              <h2>{header}:</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="about">
        {about.map(({ header, body, image, style, btn }, i) => (
          <section className={style} key={i}>
            <div className="about-contents">
              <div>
                <h5>{header}</h5>
                <p>{body}</p>
                {btn ? <button className="btn bg-light">{btn}</button> : ""}
              </div>
              <img src={image} alt="" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
