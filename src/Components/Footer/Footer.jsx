import React from 'react'
import { Fade } from "react-reveal";
import './Footer.css';

function Footer() {
  return (
    <div className="footer-div">
        <Fade>
        <p className="footer-text" style={{ color: "white" , fontSize:"20px" }}>
        Made with <span role="img">❤️</span> by Saubhagya Ranjan Mallick
        </p>
        </Fade>
    </div>
  )
}

export default Footer