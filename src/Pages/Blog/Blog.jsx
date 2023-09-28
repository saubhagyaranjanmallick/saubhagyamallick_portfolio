import React, { useRef } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReactPlayer from "react-player";
import video from "../../Assets/video.mp4";
import { Grid } from "@mui/material";

// const VIDEO_PATH = "https://www.youtube.com/watch?v=GX_5T6WW9jk";
const Blog = () => {
  const playerRef = useRef(null);

  return (
    <div>
      <Header />
      <div>
        <Grid container justifyContent="center">
          <ReactPlayer  ref={playerRef} url={video} controls={true} />
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
