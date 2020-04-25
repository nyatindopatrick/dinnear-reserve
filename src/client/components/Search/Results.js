import React from "react";
import { Link } from "react-router-dom";

const Results = ({ hotels, Loading }) => {
  return (
    <section className="results-section">
      <h2 className="text-center text_grey">
        SEARCH RESULTS FOUND 10 RESTAURANTS
      </h2>
      <div className="container">
        <div className="results my-5">
          {!hotels ? (
            <Loading />
          ) : (
            hotels.map(item => {
              const { name, photo, _id } = item;
              return (
                <Link
                  to={`/hotel/${_id}`}
                  className="d-flex result-item"
                  style={{
                    background: `url(${photo}) 0% 0% / cover`
                  }}
                  key={_id}
                >
                  <a href="detail.html">
                    <h5 className="text-center text-light">{name}</h5>
                  </a>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
