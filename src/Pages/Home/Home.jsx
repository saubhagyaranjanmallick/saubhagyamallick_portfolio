import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Box } from "@mui/material";
import Greetings from "../../Components/Greetings/Greetings";
import Skills from "../../Components/Skills/Skills";
import { BrowserView, MobileView } from "react-device-detect";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Saubhagya Mallick| Homepage</title>
        <meta
          name="description"
          content="Homepage - My Portfolio , React Portfolio, Personal Portfolio, Linked in..etc"
        />
      </Helmet>
      <BrowserView>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
          }}
        >
          <Header />
          <Greetings />
          <Skills />
          <Footer />
        </Box>
      </BrowserView>
      <MobileView>
      <Box
          sx={{
            flexGrow: 1,
            width: "100%",
          }}
        >
        <Header />
        <Greetings />
        <Skills />
        <Footer />

        </Box>

      </MobileView>
    </div>
  );
};

export default Home;
