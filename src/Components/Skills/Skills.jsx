import React from 'react'
import "./Skills.css";
import { Fade } from "react-reveal";
import { Grid, Avatar, Typography, Stack } from "@mui/material";
import figma from "../../Assets/figma.png";
import Adobexd from "../../Assets/Adobexd.png";
import Adobeps from "../../Assets/Adobeps.png";
import Icons8 from "../../Assets/Icons8.png";
import Design from "../../Assets/Design.gif";

import sql from "../../Assets/sql.png";
import android from "../../Assets/android.png";
import xcode from "../../Assets/xcode.png";
import playstore from "../../Assets/playstore.png";
import Mobile from "../../Assets/Mobile.gif";
import react from "../../Assets/react.png";
import js from "../../Assets/js.png";
import nodejs from "../../Assets/nodejs.png";



function Skills() {
  return (
    <div div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: "#fff" }}>
            What I Do?
          </h1>
        </Fade>
      </div>

      {/* UI & UX Design  */}

      <Fade left duration={1000} distance="100px">

        <Grid container justifyContent="center" >
          <Grid item lg={1}></Grid>

          <Grid item lg={5}>

            <Typography style={{ fontFamily: "sans", fontSize: "65px", fontStyle: "bold" }}  > Ui & Ux Design </Typography>
            <br />
            <Stack direction="row" spacing={3} padding={1} className="App">
              <Avatar variant="rounded" alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={Adobexd} />
              <Avatar variant="rounded" alt="Travis Howard" sx={{ width: 65, height: 65 }} src={figma} />
              <Avatar variant="rounded" alt="Cindy Baker" sx={{ width: 65, height: 65 }} src={Icons8} />
              <Avatar variant="rounded" alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={Adobeps} />

            </Stack>
            <br />
            <Typography style={{ fontSize: "26px", spacing: "5px" }}>⚡Building attractive design and layouts  using Figma </Typography>

            <Typography style={{ fontSize: "26px", spacing: "5px" }}>⚡Creating icons and editing images in photoshop </Typography>

            <Typography style={{ fontSize: "26px", spacing: "5px" }} >⚡Making demo website and app design also</Typography>
          </Grid>

          <Grid item lg={5}>
            <img style={{ width: "600px", height: "550px" }} src={Design} alt="logo" />
          </Grid>

          <Grid item lg={1}></Grid>
        </Grid>

      </Fade>
      {/* Web Devlopment */}

      <Fade right duration={3000} distance="100px">

        <Grid container justifyContent="center" >
          <Grid item lg={1}></Grid>

          <Grid item lg={5}>
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_tnosqmph.json"
              background="transparent"
              speed="1"
              style={{ width: "80%", height: "60%" }}
              loop
              autoplay
            ></lottie-player>
          </Grid>


          <Grid item lg={5}>

            <Typography style={{ fontFamily: "sans", fontSize: "65px", fontStyle: "bold" }}  > Web Devlopment </Typography>
            <br />
            <Stack direction="row" spacing={3} padding={1} className="App">
              <Avatar variant="rounded" alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={js} />
              <Avatar variant="rounded" alt="Travis Howard" sx={{ width: 65, height: 65 }} src={react} />
              <Avatar variant="rounded" alt="Cindy Baker" sx={{ width: 65, height: 65 }} src={sql} />
              <Avatar variant="rounded" alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={nodejs} />

            </Stack>
            <br />
            <Typography style={{ fontSize: "26px", spacing: "5px" }}>⚡ Building resposive website front end using  CSS, JS, React Mui </Typography>

            <Typography style={{ fontSize: "26px", spacing: "5px" }}>⚡Creating application backend in Node, Express & Django </Typography>

            <Typography style={{ fontSize: "26px", spacing: "5px" }} >⚡Complete unit testing by jReact jest</Typography>
          </Grid>



          <Grid item lg={1}></Grid>
        </Grid>

      </Fade>



      {/* Mobile App Devlopment  */}
      <br />
      <Fade left duration={3000} distance="50px">

        <Grid container justifyContent="center" >
          <Grid item lg={1}></Grid>

          <Grid item lg={5}> <img style={{ width: "600px", height: "550px" }} src={Mobile} alt="logo" />  </Grid>

          <Grid item lg={5}>
            <Typography style={{ fontFamily: "sans", fontSize: "65px", fontStyle: "bold" }}  > Mobile App Devlopment </Typography>
            <br />
            <Stack direction="row" spacing={3} padding={1} className="App">
              <Avatar variant="rounded" alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={android} />
              <Avatar variant="rounded" alt="Travis Howard" sx={{ width: 65, height: 65 }} src={react} />
              <Avatar variant="rounded" alt="Cindy Baker" sx={{ width: 65, height: 65 }} src={xcode} />
              <Avatar variant="rounded" alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={playstore} />
              {/* <Avatar variant="rounded" alt="Travis Howard" sx={{ width: 65, height: 65 }} src={appstore} /> */}

            </Stack>
            <br />
            <Typography style={{ fontSize: "26px", spacing: "5px" }}>⚡Building dynamic app by React Native & Android studio</Typography>

            <Typography style={{ fontSize: "26px", spacing: "5px" }}>⚡Creating application for Online Exam and Assesment </Typography>

            <Typography style={{ fontSize: "26px", spacing: "5px" }} >⚡Apps are availabel in Playstore and Appstores </Typography>
          </Grid>

          <Grid item lg={1}></Grid>

        </Grid>
      </Fade>



    </div>
  )
}

export default Skills;