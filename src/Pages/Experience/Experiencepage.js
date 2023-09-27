import React from "react";
import { Helmet } from "react-helmet";
import "./Experience.css";
import { Fade } from "react-reveal";
import { experience } from "../../portfolio";
//Header and Footer
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import ExperienceAccordion from "../../Components/ExperienceCards/ExperienceAccordion";
//Image
import ExperienceImg from "./ExperienceImg";

function Experiencepage() {
  return (
    <div className="experience-main">
      <Helmet>
        <title>Soubhagya Das | Experiencepage</title>
        <meta
          name="description"
          content="Projectpage - Projectpage, My Portfolio , React Portfolio, Personal Portfolio, Linkedin..etc"
        />
      </Helmet>
      <Header />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg />
            </div>
            <div className="experience-heading-text-div">
              <h1 className="experience-heading-text" style={{ color: "#fff" }}>
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: "#c770f0" }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: "#fff" }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} />
      <Footer />
    </div>
  );
}

export default Experiencepage;
