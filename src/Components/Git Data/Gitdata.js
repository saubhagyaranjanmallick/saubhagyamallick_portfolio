import React, { useEffect, useState } from "react";
import axios from "axios";
//CSS
import "./Gitdata.css";
// import AddressImg from "./../../Pages/ContactMe/AddressImg";

function Gitdata() {
  const [github, setGithub] = useState([]);
  const [repos, setRepos] = useState([]);

  const getUserDetails = async () => {
    try {
      //Users Details API
      await axios
        .get("https://api.github.com/users/SOUBHAGYA32")
        .then((response) => {
          setGithub(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      //Repository API
      await axios
        .get("https://api.github.com/users/SOUBHAGYA32/repos")
        .then((response) => {
          setRepos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("API Error" + error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const totalStars = () => {
    const each_repo_stars = repos.map(
      ({ stargazers_count }) => stargazers_count
    ); //For getting the list of all the stars for each repo
    const total = each_repo_stars.reduce((a, b) => a + b, 0); //For finding sum of the elements in a list
    return total;
  };

  return (
    <div className="stats" id="stats">
      <h1 className="stats-title">Stats</h1>
      <div className="stats-blocks">
        <div className="github-followers">
          <div>
            <p className="stats-heading">GitHub Followers</p>
            <p className="stats-count">{github.followers}</p>
          </div>
          <div>
            <img
              className="stats-pic"
              src="https://res.cloudinary.com/muvi/image/upload/v1665214321/followers_wwmyoc.png"
              alt=""
            />
          </div>
        </div>
        <div className="github-stars">
          <div>
            <p className="stats-heading">
              GitHub Stars <span></span>
            </p>
            <p className="stats-count">{totalStars()}</p>
          </div>
          <div>
            <img
              className="stats-pic"
              src="https://res.cloudinary.com/muvi/image/upload/v1665214316/GithubStar_sizwk0.png"
              alt="star"
            />
          </div>
        </div>
        <div className="github-repos">
          <div>
            <p className="stats-heading">GitHub Repos</p>
            <p className="stats-count">{repos.length}</p>
          </div>
          <div>
            <img
              className="stats-pic"
              src="https://res.cloudinary.com/muvi/image/upload/v1665214319/repo_jntw1m.png"
              alt="Repo"
            />
          </div>
        </div>
        <div className="page-views">
          <div>
            <p className="stats-heading">No.of Visitors</p>
            <p className="stats-count">NA</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/muvi/image/upload/v1665214317/eye_gpwprr.png"
              className="stats-pic"
              alt="Visitors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gitdata;
