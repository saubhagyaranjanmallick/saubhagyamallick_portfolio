import React, { useRef } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReactPlayer from "react-player";

const VIDEO_PATH = "https://www.youtube.com/watch?v=GX_5T6WW9jk";
const Blog = () => {
  const playerRef = useRef(null);

  return (
    <div>
      <Header />
      <div>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
