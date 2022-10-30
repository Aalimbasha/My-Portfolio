// import React from "react";

import React from "react";
import "../css/MySkills.css";
import { Link } from "react-router-dom";
import logodesign from "../images/logo design.png";

import {
  FaYoutubeSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
 
  FaGoogle,
} from "react-icons/fa";
// import images;
import laptop1 from "../images/laptop1.png";
import reactt from "../images/react1.png";
import redux from "../images/redux.png";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import html from "../images/html.png";

// import {useHistory} from "react-router-dom"

export default function MySkills(props) {
  // const history = useHistory()
  //    const [logout,setLogout]=useState(false);
  //    useEffect(() => {
  //     history.push("/")
  //    }, [logout]);
  //   const logoutHandler = () => {
  //     localStorage.removeItem("info");
  //     setLogout(true)

  return (
    <div className="skill-bg">
      <div className="skill-navbar">
        <div className="skill-slider">
          <img src={logodesign} alt="" className="skill-logo" />

          <h1 className="skill-portfolio">Portfolio</h1>
        </div>

        <div>
          <div className="skill-nav">
            <ul>
              <Link to="/intro">
                <li>
                
                  HOME
                </li>
              </Link>
              <li className="active">MY SKILLS</li>

              <Link to="/about">
                <li>ABOUT ME</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg">
        <h3 className="discription">
          I have a good knowledge in React and Redux, javascript, Bootstrap,
          HTML & CSS.
        </h3>
        <hr></hr>

        <section>
          <div className="react">
            <img src={reactt} alt="react" />
          </div>
          <div className="redux">
            <img src={redux} alt="redux" />
          </div>
          <div className="bootstrap">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="css">
            <img src={css} alt="css" />
          </div>
          <div className="html">
            <img src={html} alt="html" />
          </div>
          <div className="html">
            <img src={html} alt="html" />
          </div>
        </section>
        <div className="os-content">
          <img src={laptop1} alt="" />
          <span className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            architecto iusto aliquam, expedita natus iste similique sunt id
            minima exercitationem. Iure, reiciendis numquam placeat itaque neque
            repellendus vitae non inventore! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis architecto iusto aliquam,
            expedita natus iste similique sunt id minima exercitationem. Iure,
            reiciendis numquam placeat itaque neque repellendus vitae non
            inventore! inventore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            <p>
              Blanditiis architecto iusto aliquam, expedita natus iste similique
              sunt id minima exercitationem. Iure, reiciendis numquam placeat
              itaque neque repellendus vitae non inventore!
            </p>
          </span>
        </div>
      </div>
      {/* this is the footer section */}
      <div className="footer">
        <p>Contact Us</p>
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
    </div>
  );
}
