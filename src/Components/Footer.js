import React from 'react'
import '../Component_css/Footer.css'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footer">
                <div className="footerName">
                    Raj Padval
                </div>
                <div className="socialHandles">
                    <div className="socialLinks">
                     <a href="http://instagram.com/raj_since_2909/" id='i' target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                    </div>
                    <div className="socialLinks">
                    <a href="https://www.facebook.com/profile.php?id=100013864595607" id='f' target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
                    </div>
                    <div className="socialLinks">
                    <a href="http://www.youtube.com/rajpadval" id='y' target='_blank' rel="noopener noreferrer"><BsYoutube /></a>
                    </div>
                </div>
                <div className="content">
                    &copy;coder_29 | All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer