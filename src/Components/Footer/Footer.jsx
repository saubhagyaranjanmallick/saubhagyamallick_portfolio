import React from "react";
// import { Fade } from "react-reveal";
import "./Footer.css";
import { BrowserView, MobileView } from "react-device-detect";

function Footer() {
  return (
    <>
      <BrowserView>
        <div className="footer-div">
          {/* <Fade> */}
          <p
            className="footer-text"
            style={{ color: "white", fontSize: "20px" }}
          >
            Made with <span role="img">❤️</span> by Saubhagya Ranjan Mallick
          </p>
          {/* </Fade> */}
        </div>
      </BrowserView>
      <MobileView>
      <div className="footer-div">
          {/* <Fade> */}
          <p
            className="footer-text"
            style={{ color: "white", fontSize: "12px" }}
          >
            Made with <span role="img">❤️</span> by Saubhagya Ranjan Mallick
          </p>
          {/* </Fade> */}
        </div>
      </MobileView>
    </>
  );
}

export default Footer;
