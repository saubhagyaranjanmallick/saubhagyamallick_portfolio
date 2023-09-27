import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import {Grid} from "@mui/material";

const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = "#E040FB";
    el.style.borderRadius = "10px";




};

const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
};


const menuBar = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "Education",
        link: "/education"
    },
    {
        name: "Experience",
        link: "/experience"
    },
  
    {
        name: "Contact Me",
        link: "/contact"
    },
      {
        name: "My Blog",
        link: "/blog"
    }
];



const Header = () => {
  
    return (
        <div>
            <Grid container justifyContent="center" >
                <Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
         <Fade top duration={1000} distance="20px">
                <div>
                    <header className="header">
                        <NavLink to="/home" className="logo">
                            <span style={{ color: "white" }}> &lt;</span>
                            <span className="logo-name" style={{ color: "white" ,fontSize:"28px"}}>
                                Saubhagya<span style={{ color: "#E040FB",fontSize:"28px" }} >Ranjan</span>
                            </span>
                            <span style={{ color: "white" }}>/&gt;</span>
                        </NavLink>
                        <input type="checkbox" className="menu-btn" id="menu-btn" />
                        <label htmlFor="menu-btn" className="menu-icon">
                            <span className="navicon"></span>
                        </label>
                        <ul className="menu">
                            {menuBar.map((item) => {
                                return (<li>
                                    <NavLink
                                        to={item.link}
                                        style={({ isActive }) => ({
                                            fontWeight: isActive ? "bold" : "normal",
                                            fontSize: isActive ? "20px" : "20px",
                                            color: isActive ? "white" : "#fff",
                                            borderBottom: isActive ? "2px solid #E040FB" : "none",
                                        })}
                                        onMouseEnter={(event) => onMouseEnter(event)}
                                        onMouseOut={(event) => onMouseOut(event)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>)
                            })}
                        </ul>
                    </header>
                </div>
            </Fade> 
    
                </Grid>
            </Grid>
          
       </Grid>
        </div>
    )
}

export default Header
