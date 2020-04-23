import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container footer-top">
          <ul className="footer-list-one my-lg-5 my-md-5 my-1">
            <li>
              <Link to="#"></Link> HOME
            </li>
            <li>
              <Link to="#"></Link>SEARCH
            </li>
            <li>
              <Link to="#"></Link>ABOUT
            </li>
            <li>
              <Link to="#"></Link>ADVERTISE
            </li>
          </ul>

          <img
            className="footer-logo"
            src="https://user-images.githubusercontent.com/48393059/80013603-d2effe00-84d7-11ea-8ef6-e30432e2b95a.png"
            alt=""
          />
          <ul className="footer-list-two my-lg-5 my-md-5 my-1">
            <li>
              <Link to="#"></Link>FACEBOOK
            </li>
            <li>
              <Link to="#"></Link>TWITTER
            </li>
            <li>
              <Link to="#"></Link>BLOG
            </li>
            <li>
              <Link to="#"></Link>GOOGLE+
            </li>
          </ul>
        </div>

        <div className="footer-middle container">
          <section>
            <h5>SUBSCRIBE</h5>
            <div className="input input-footer">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="you@example.com"
              />
              <span>
                <button className="btn btn-dark">Send</button>
              </span>
            </div>
          </section>

          <div>
            <h5>CONTACT</h5>
            <p>Have Link question?</p>
            <Link to="#">info@dinnear.com</Link>
          </div>

          <div>
            <h5>ABOUT</h5>
            <p>
              Our work is to provide you with choices to restaurants to choose
              from based on your location by listing their services and meals
              served.
            </p>
          </div>
        </div>

        <div className="footer-bottom d-flex w-100 px-3">
          <ul className="list-unstyled my-auto px-4">
            <li>
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
          <p className="text-center my-auto">
            {" "}
            &copy; Dinnear
            <span id="year"> {new Date().getFullYear()}</span>
          </p>
          <p className="flex-end my-auto">
            Made with
            <span>
              <i className="fas fa-heart"></i>
            </span>
            by
            <Link
              className="made-by"
              to="https://www.linkedin.com/in/nyatindopatrick/"
            >
              Pato
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
