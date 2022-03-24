import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { BsMessenger } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import "../Routes_css/Contact.css";
import me2 from '../Images/me2.png';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="contactTitle">
          <h1>Feel free to Contact us</h1>
        </div>
        <div className="contactDiv">
          <div className="contactDirect">
            <div>
              <HiMail className="contactIcons" />
              <label>Email</label>
              <h3>rajpadval145@gmail.com</h3>
              <a href="mailto:mightyrajp@gmail.com">Send a message</a>
            </div>
            <div>
              <BsMessenger className="contactIcons" />
              <label>Messenger</label>
              <h3>Raj Padval</h3>
              <a href="http://m.me/raj.padval">Send a message</a>
            </div>
            <div>
              <BsInstagram className="contactIcons" />
              <label>Instagram</label>
              <h3>raj_since_2909</h3>
              <a href="https://www.instagram.com/direct/inbox">Send a message</a>
            </div>
            <div>
              <BsWhatsapp className="contactIcons" />
              <label>Whatsapp</label>
              <h3>+919*******83</h3>
              <a href="http://api.whatsapp.com/send?phone=+919769983083">Send a message</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contactSection">
          <div className="myInfo">
            <h2>Lets talk about everything!</h2>
            <img src={me2} alt="" />
            <h3>Feel free to ask us anything!</h3>
            <p>
              Have doubt or suggestion to make? Feel free to ask anything. If you
              have any suggestions, please let me know. Your suggestions are
              highly appreciated. I appreciate your time and try hard to reply to
              every single message posted here! Keep dropping your priceless
              opinions.
            </p>
          </div>
          <div className="contactForm">
            <div className="name">
              <label >Name :</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="email">
              <label >Email :</label>
              <input type="email" name="email" id="email"/>
            </div>
            <div className="phone">
              <label >Phone :</label>
              <input type="tel" name="phone" id="phone"/>
            </div>
            <div className="message">
              <label >Message :</label>

              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" id="submit">Send Message</button>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};



export default Contact;
