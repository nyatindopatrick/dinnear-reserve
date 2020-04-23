import React from "react";

const Results = () => {
  return (
    <section className="results-section">
      <h2 className="text-center text_grey">
        SEARCH RESULTS FOUND 10 RESTAURANTS
      </h2>
      <div className="container">
        <div className="results my-5">
          <div
            className="d-flex result-item"
            style={{
              background:
                "url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
            }}
          >
            <a href="detail.html">
              <h5 className="text-center text-light">MOCHA RESTAURANT</h5>
            </a>
          </div>

          <div
            className="d-flex result-item"
            style={{
              background:
                "url(https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
            }}
          >
            <a href="detail.html">
              <h5 className="text-center text-light">ROAN RESTAURANT</h5>
            </a>
          </div>

          <div
            className="d-flex result-item"
            style={{
              background:
                "url(https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?cs=srgb&dl=assorted-hanging-paper-lamps-698907.jpg&fm=jpg)"
            }}
          >
            <a href="detail.html">
              <h5 className="text-center text-light">DUNGA HILLCAMP</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
