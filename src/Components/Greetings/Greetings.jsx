import React from "react";
// import { Fade } from "react-reveal";
import SocialIcon from "../SocialMediaicons/SocialIcon";
import "./Greetings.css";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";

import { greeting } from "../../Protfolio";
import { BrowserView, MobileView } from "react-device-detect";
import { Typography } from "@mui/material";

function Greetings() {
  return (
    <>
      <Helmet>
        <title>Saubhagya Mallick | Home</title>
        <meta
          name="description"
          content="Homepage - My Portfolio , React Portfolio, Personal Portfolio, Linked in..etc"
        />
      </Helmet>
      {/* <Fade bottom duration={2000} distance="40px"> */}
      <BrowserView>
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <h1
                className="greeting-text"
                style={{ color: "#E0E0E0", textAlign: "left" }}
              >
                {greeting.title}
              </h1>

              <p className="greeting-text-p subTitle">
                <Typewriter
                  options={{
                    strings: [
                      "I'm Saubhagya Ranjan Mallick",
                      "Web Developer 💻",
                      "Mobile Developer 📱",
                      "MERN Stack Developer 🧑‍💻",
                      "Open Source Contributor 😊",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    // cursor: "🔥",
                    Boolean: true,
                  }}
                />

                {/* <span style={{ marginRight: "10px" }}>I'm</span>
                <span style={{ color: "#E3405F" }}>{greeting.fullname}. </span>
                {greeting.subTitle} */}
              </p>
              <SocialIcon />
            </div>

            <div>
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                style={{ width: "95%", height: "70%" }}
                loop
                autoplay
                background="transparent"
                speed="1"
              ></lottie-player>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {/* <div className="greeting-main"> */}
        <div>
          <Typography
            variant="h4"
            style={{
              color: "#E0E0E0",
              textAlign: "left",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            &nbsp; {greeting.title}
          </Typography>
          <p className="greeting-text-p subTitle">
            <Typewriter
              options={{
                strings: [
                  "I'm Saubhagya Ranjan",
                  "Web Developer 💻",
                  "Mobile Developer 📱",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                // cursor: "🔥",
                Boolean: true,
                fontSize: 14,
              }}
            />
          </p>
<div style={{float:"right"}}>
<SocialIcon/>

</div>
        </div>

        {/* </div> */}
      </MobileView>
      {/* </Fade> */}
    </>
  );
}

export default Greetings;
