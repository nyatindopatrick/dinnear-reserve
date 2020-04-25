import React, { useState, useEffect } from "react";
import Results from "./Results";
import axios from "axios";

const Search = ({Loading}) => {
  const [inputs, setInputs] = useState(null);
  const [hotels, setHotels] = useState(null);
  useEffect(() => {
    axios
      .post("/api/hotels")
      .then(res => {
        setHotels(res.data);
      })
      .catch(err => console.log(err.stack));
  },[]);
  const handleInputs = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  console.log(inputs);
  return (
    <div>
      <section className="filter-section my-lg-5 my-md-5 p-5">
        <h2 className="text-center text_grey">
          Filter by location, name, stars, price
        </h2>
        <form
          className="container d-flex justify-content-center filters
                    mx-auto"
        >
          <label htmlFor="name">
            NAME:
            <input
              id="name"
              className="form-control"
              type="text"
              name="name"
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="location">
            LOCATION:
            <span className="input">
              <input
                id="location"
                className="form-control"
                type="text"
                name="location"
                onChange={handleInputs}
              />
            </span>
          </label>
          <label htmlFor="stars">
            STARS:
            <br />
            <div className="custom-select">
              <select name="stars" onChange={handleInputs}>
                <option value="0">Select Stars</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </label>
          <label htmlFor="price">
            PRICE:
            <br />
            <input type="range" min="1" max="100" onChange={handleInputs} />
          </label>
          <button
            type="submit"
            className="btn btn-primary text-light btn-sm
                        mt-4"
          >
            Search
          </button>
          <button
            type="reset"
            className="btn btn-warning text-light
                        btn-clear btn-sm mt-4"
          >
            <span>
              <i className="fas fa-edit"></i>
            </span>{" "}
            Clear filter
          </button>
        </form>
      </section>
      <Results hotels={hotels} Loading={Loading} />
    </div>
  );
};

export default Search;
