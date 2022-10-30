import React from "react";
import "../css/Intro.css";
import { Link } from "react-router-dom";
import logodesign from "../images/logo design.png";
import myadd from "../images/myadd.png";
import shape from "../images/shape.png";
import cv from "../docs/cv .pdf";
import hand from "../images/hand.gif";


function Intro() {
  //  const logoutHandler = () => {
  //    localStorage.removeItem("info");
  //  };
  return (
    //
    <div className="bgContainer">
      <div>
        <div className="dot">
          <img src={logodesign} alt="" className="intro-logo" />
          <h1 className="intro-portfolio">Portfolio</h1>
          <div>
            <div className="intro-nav">
              <ul>
                <li className="active">
                 
                  HOME
                </li>
                <Link to="/myskills">
                  <li>MY SKILLS</li>
                </Link>
                <Link to="/about">
                  <li>ABOUT ME</li>
                </Link>
                {/* <li>
                  <button onClick={logoutHandler}>LogOut</button>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>
            <span className="h2-span"></span>I,m<span>Aalim Basha</span>
          </h2>
          <label className="position">{`<ReactJS Developer/>`}</label>
          <p className="para">
            This is my official portfolio website to show <br /> all Details and
            work experiance in Web development
          </p>
        </div>

        <a className="cv" href={cv}>
          DOWNLOAD CV
        </a>
       
        <div className="hand">
          <img src={hand} alt="" />
        </div>
        <div className="images">
          <img src={shape} alt="" className="shape" />
          <img src={myadd} alt="" className="my-add" />
        </div>
      </div>
    </div>
  );
}
export default Intro;
