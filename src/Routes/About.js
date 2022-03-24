import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Routes_css/About.css";
import programmer from "../Images/programmer.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import me1 from "../Images/me1.png";
import me2 from "../Images/me2.png";
import me3 from "../Images/me3.png";

const pics = [
  {
    img: me2
  },
  {
    img: me3
  },
  {
    img: me1
  }
]

const About = () => {
  return (
    <>
      <Navbar />
      <div id="About">
        <div className="main">
          <div className="aboutContainer">
            <div className="aboutData">
              <h3>
                Name : <span> Raj Padval</span>
              </h3>
              <h3>
                Profession : <span> Front-End Web Developer</span>
              </h3>
              <h3>
                Location : <span> Mumbai, Maharashtra</span>
              </h3>
              <h3>
                Why : <span> Passion</span>
              </h3>
            </div>
            <div className="aboutImg">
              <img src={programmer} alt="" />
            </div>
            <div className="end">
              <div className="aboutLinks">
                <div className="aboutSocialLinks">
                  <a
                    href="http://instagram.com/raj_since_2909/"
                    id="i"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </div>
                <div className="aboutSocialLinks">
                  <a
                    href="https://www.facebook.com/profile.php?id=100013864595607"
                    id="f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook />
                  </a>
                </div>
                <div className="aboutSocialLinks">
                  <a
                    href="https://www.facebook.com/profile.php?id=100013864595607"
                    id="g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </div>
                <div className="aboutSocialLinks">
                  <a
                    href="http://www.youtube.com/rajpadval"
                    id="y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="gridContainer">
            <h2>Photos</h2>
            <div className="grid">

              {
                pics.map(({ img, index }) => {
                  console.log(img, index)
                  return (
                    <img src={img} alt="" srcset="" />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
