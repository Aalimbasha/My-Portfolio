import React from "react";
import "../css/About.css";
import { Link } from "react-router-dom";
import logodesign from "../images/logo design.png";

import {
  FaYoutubeSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";

function About() {
  //  const logoutHandler = () => {
  //    localStorage.removeItem("info");
  //  };
  return (
    <div className="about-bg">
      <div className="about-slider">
        <img src={logodesign} alt="" className="about-logo" />
        <h1 className="about-portfolio">Portfolio</h1>
        <div>
          <div className="about-nav">
            <ul>
              <Link to="/intro">
                <li>HOME</li>
              </Link>
              <Link to="/myskills">
                <li>MY SKILLS</li>
              </Link>
              <li className="active">ABOUT ME</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box">
        <h1>About me</h1>
        <p>
          My name is <strong style={{ color: "blue" }}> Aalim basha </strong>,
          I have completed my graduation BA English.
        </p>

        <p>
          I am interested in <strong> ReactJS developer </strong> if you give me
          a opportunity I will do my best.
        </p>
      </div>

      {/* this is Footer section */}
      <div className="footer">
        <p>Contact Us </p>
        <hr></hr>
        <ol>
          <li className="fa-facebook">
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="fa-youtube">
            <a href="#">
              <FaYoutubeSquare />
            </a>
          </li>

          <li className="fa-twit">
            <a href="#">
              <FaTwitterSquare />
            </a>
          </li>
          <li className="fa-insta">
            <a href="#">
              <FaInstagramSquare />
            </a>
          </li>
          <li className="fa-google">
            <a href="#">
              <FaGoogle />
            </a>
          </li>
        </ol>

        <h4 className="copy">Copyright © 2020 All Rights reserved by :Aalim</h4>
      </div>
      {/* ================================================== */}
    </div>
  );
}

export default About;
