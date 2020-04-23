import React, { useState } from "react";
import Results from "./Results";

const Search = () => {
  const [inputs, setInputs] = useState(null);
  const handleInputs = e => {
    const { name, value } = e.target;
    setInputs({...inputs,  [name]: value });
  };
  console.log(inputs)
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
          <label for="name">
            NAME:
            <input id="name" className="form-control" type="text" name="name" onChange={handleInputs} />
          </label>
          <label for="location">
            LOCATION:
            <span className="input">
              <input
                id="location"
                className="form-control"
                type="text"
                name="location"
                onChange={handleInputs}
              />
              <span>
                <i
                  className="fas fa-chevron-down position-absolute
                                    ml-n4 mt-2"
                ></i>
              </span>
            </span>
          </label>
          <label for="stars">
            STARS:
            <span className="input">
              <input
                id="stars"
                className="form-control"
                type="number"
                name="stars"
                onChange={handleInputs}
              />
              <span>
                <i
                  className="fas fa-chevron-down position-absolute
                                    ml-n4 mt-2"
                ></i>
              </span>
            </span>
          </label>
          <label for="price">
            PRICE:
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
      <Results />
    </div>
  );
};

export default Search;
